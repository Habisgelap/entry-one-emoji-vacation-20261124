// One Emoji, One Dream Vacation — entry program.
//
// Writes exactly one emoji, nothing else, to /output/entry.txt.
// The chosen emoji is Mount Fuji (U+1F5FB): a named mountain in a faraway
// place, a postcard at a glance, specific to one dream trip (Japan), and a
// fresh pick against a field full of beaches and palms.
//
// The program is deliberately deterministic: it always writes the same
// single emoji, and it refuses to write anything that fails its own gate
// checks, so a bad value can never reach the judge.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: exactly one emoji. U+1F5FB MOUNT FUJI.
// One codepoint, Emoji_Presentation=yes, so it needs no variation selector
// and no ZWJ sequence. Raw UTF-8: F0 9F 97 BB (4 bytes).
const CHOSEN_EMOJI = "\u{1F5FB}";

const OUTPUT_PATH = "/output/entry.txt";

// The gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 8
// characters, not only white space. The judge's first criterion is that
// the entry is exactly one emoji, no words. We hold ourselves to the
// stricter of the two: exactly one Unicode codepoint, and that codepoint
// must be an emoji (Extended_Pictographic).
function validateEntry(text: string): void {
  const codepoints = [...text];
  if (codepoints.length !== 1) {
    throw new Error(
      `entry must be exactly one codepoint, got ${codepoints.length}`,
    );
  }
  const [only] = codepoints;
  // \p{Extended_Pictographic} matches emoji codepoints; the /u flag makes
  // the class work on codepoints rather than UTF-16 units.
  if (!/^\p{Extended_Pictographic}$/u.test(only)) {
    throw new Error(`entry is not an emoji codepoint: U+${only.codePointAt(0)!.toString(16).toUpperCase()}`);
  }
  if (only.trim() === "") {
    throw new Error("entry must not be white space");
  }
  if (Buffer.byteLength(text, "utf8") > 8) {
    throw new Error("entry exceeds the 8-byte gate");
  }
}

function main(): void {
  validateEntry(CHOSEN_EMOJI);
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file holds the emoji and nothing else.
  writeFileSync(OUTPUT_PATH, CHOSEN_EMOJI, "utf8");

  // Read back what was written and re-validate it, so a partial write or
  // an encoding surprise fails loudly here instead of in front of the judge.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  validateEntry(written);
  if (written !== CHOSEN_EMOJI) {
    throw new Error("read-back mismatch: file does not hold the chosen emoji");
  }
  const bytes = Buffer.byteLength(written, "utf8");
  console.log(
    `wrote ${OUTPUT_PATH}: ${CHOSEN_EMOJI} (U+1F5FB MOUNT FUJI, ${bytes} bytes, 1 codepoint)`,
  );
}

main();
