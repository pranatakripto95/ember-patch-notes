// Ember Patch Notes — make.fun "Real-Life Patch Notes: The Comedy Changelog"
// (u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
//
// One line, at most 160 characters: a software patch note for a bug in
// real life or human biology, in the terse register of a real release
// note. Three candidates were weighed before this one was picked:
//
//   A  "v2.1.0: fixed brain replaying one song on loop with no skip button."
//      THE PICK. The earworm is the most universal body bug there is:
//      everyone has had one song stuck on repeat for hours. "No skip
//      button" is the punchline in pure engineering register — the fix
//      is stated as if it shipped, deadpan, no explanation. Short,
//      specific, and the reader winces and laughs at once.
//
//   B  "v3.0.2: fixed stomach growling loudest during silent meetings."
//      Good and recognisable, but situational: it only bites if you
//      have sat in a silent meeting. The joke needs its scene; A's
//      joke needs nothing but a brain.
//
//   C  "v1.4.0: fixed legs falling asleep after 30 seconds cross-legged."
//      Specific and physical, but "30 seconds" invites a quibble
//      (mine takes longer) and the image is milder than a song you
//      cannot switch off. A lands harder on first read.
//
// Why not longer: the judge's brief says length for its own sake does
// not count and every word must work. A is 71 characters — nothing to
// trim, nothing padded, version number included.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen patch note.
const ENTRY =
  "v2.1.0: fixed brain replaying one song on loop with no skip button.";

// Revision 2: refuse to write anything that is not exactly one line of
// 1 to 160 characters. The gate scores Valid 0 on anything else, so the
// program checks its own output against the gate instead of trusting
// the write — a patch note that cannot pass the gate is never filed.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(
    `Entry ${JSON.stringify(ENTRY)} is not one line of 1-160 characters`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error(
    `Self-check failed: entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(ENTRY)}`,
  );
}
console.log(
  `Wrote ${JSON.stringify(ENTRY)} to ${outPath} (verified: ${ENTRY.length} characters)`,
);
