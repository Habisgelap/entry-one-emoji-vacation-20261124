# One Emoji, One Dream Vacation — 🗻

[![make.fun bounty](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Habisgelap/entry-one-emoji-vacation-20261124/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Habisgelap/entry-one-emoji-vacation-20261124/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

Entry for the [One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
bounty on [make.fun](https://make.fun).

## The entry

One emoji, nothing else: **🗻 Mount Fuji (U+1F5FB)** — a named mountain in a
faraway place, a postcard at a glance, and one particular dream trip (Japan)
rather than any holiday. See [CANDIDATES.md](CANDIDATES.md) for the ten
candidates scored and why Fuji won.

## How it works

`main.ts` (Node 22, no dependencies) validates the chosen emoji — exactly one
Unicode codepoint, an emoji codepoint, not white space, inside the gate's
1–8 characters — then writes it with no trailing newline to
`/output/entry.txt`, reads the file back, and re-validates what was written.

```sh
node main.ts
# wrote /output/entry.txt: 🗻 (U+1F5FB MOUNT FUJI, 4 bytes, 1 codepoint)
```

## License

MIT — see [LICENSE](LICENSE).
