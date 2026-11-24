# Candidate emojis — "One Emoji, One Dream Vacation"

Scored 0–5 on: Surprising, Specific, Concise (exactly one emoji, reads at a glance),
plus the competition's own judge criteria, most important first:
J1 plainly names a dream vacation · J2 postcard-vivid at a glance · J3 personal/specific,
not generic · J4 wit or surprise · J5 instantly readable across cultures/screens.

All candidates are a single Unicode codepoint with Emoji_Presentation=yes
(no variation selector, no ZWJ, no text), so each is exactly one emoji and
passes the 1–8 character gate with room to spare.

| # | Emoji | Trip it names | Surp | Spec | Conc | J1 | J2 | J3 | J4 | J5 | Total /40 |
|---|-------|---------------|-----:|-----:|-----:|---:|---:|---:|---:|---:|----------:|
| 1 | 🗻 | Mount Fuji, Japan | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | **38** |
| 2 | 🌋 | Volcano — Hawaii / Iceland | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 36 |
| 3 | 🦒 | African safari | 5 | 5 | 5 | 2 | 4 | 5 | 5 | 5 | 36 |
| 4 | 🐧 | Antarctica expedition | 5 | 5 | 5 | 2 | 4 | 5 | 5 | 5 | 36 |
| 5 | 🗼 | Tokyo Tower, Tokyo | 4 | 5 | 5 | 4 | 4 | 5 | 3 | 5 | 35 |
| 6 | 🛕 | Hindu temple — Bali / Angkor | 4 | 5 | 5 | 4 | 4 | 5 | 3 | 4 | 34 |
| 7 | 🏰 | Fairytale castle, Europe | 3 | 4 | 5 | 4 | 5 | 4 | 3 | 5 | 33 |
| 8 | 🤿 | Scuba diving, reef trip | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 32 |
| 9 | 🌺 | Hibiscus — Hawaii | 3 | 4 | 5 | 3 | 4 | 4 | 3 | 5 | 31 |
| 10 | 🏝️ | Desert island | 1 | 2 | 5 | 5 | 5 | 2 | 1 | 5 | 26 |

## Why 🗻 Mount Fuji wins

- **J1 (top-weighted):** a mountain is literally in the judge's own list
  ("a beach, a mountain, a plane, a hammock, a faraway place"), and Fuji is
  a named mountain in a named faraway place — Japan. It plainly names a
  dream vacation, unlike the animal picks (🦒, 🐧), which score high on
  surprise but fail J1: an animal does not plainly name a vacation, and the
  judge's first criterion decides unless a later one differs by much more.
- **J2:** a snow-capped peak is a postcard by itself — a stranger sees the
  place before reading a word.
- **J3:** one particular mountain, one particular country — not "any holiday".
- **J4:** a fresh pick against a field that will be full of beaches, palms
  and planes (🏝️ is the most obvious entry and likely the most duplicated
  one in a ~693-entry field; byte-identical entries share a rate and the
  earlier receipt places above its copies).
- **J5:** universally recognised, clear at small size, no explaining needed.
- **Gate safety:** U+1F5FB is one codepoint, Emoji_Presentation=yes, so it
  needs no variation selector and no ZWJ sequence. Written raw it is 4 UTF-8
  bytes / 2 UTF-16 code units — inside the gate's 1–8 characters either way
  the scorer counts.

## Chosen entry

🗻 — U+1F5FB MOUNT FUJI. The program writes exactly this one emoji, nothing
else, no trailing newline, to `/output/entry.txt`.
