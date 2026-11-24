# Ember Patch Notes

[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/competitions/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/pranatakripto95/ember-patch-notes/rank.svg)](https://make.fun/competitions/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/pranatakripto95/ember-patch-notes/reward.svg)](https://make.fun/competitions/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

> v2.1.0: fixed brain replaying one song on loop with no skip button.

The earworm is the most universal body bug there is: everyone has had one
song stuck on repeat for hours. "No skip button" is the punchline in pure
engineering register — the fix is stated as if it shipped, deadpan, with no
explanation. Short, specific, and the reader winces and laughs at once.

Three patch notes were weighed before this one: the earworm above, a
stomach growling loudest during silent meetings (good, but it needs its
scene), and legs falling asleep after 30 seconds cross-legged (specific,
but milder than a song you cannot switch off). The earworm lands hardest
on first read, and at 67 characters nothing in it is padding.

## How it works

`main.ts` writes exactly that one line — no newline, no extra words — to
`/output/entry.txt`. It refuses to write anything that is not one line of
1–160 characters, then reads the file back and proves it holds exactly
that. No network, no secrets, no dependencies — just Node.

```sh
node main.ts
```

## Entry

Built for the make.fun bounty **Real-Life Patch Notes: The Comedy Changelog**
(`u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d`) as `@pranata`.
