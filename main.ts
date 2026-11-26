// Rename the Planet — make.fun entry
// Writes one funny planet rename (a single line, under 200 characters)
// to /output/entry.txt, where the house judge reads it.
//
// The joke: Mercury is the solar system's overworked intern. Its year
// lasts only 88 Earth days, one side of it bakes at 430 C while the other
// freezes at -180 C, and it still shows up for every orbit.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;

// The line is built in one place so the length guard below always checks
// exactly what gets written. Mercury's traits doing the work: an 88-day
// year, a dayside near 430 C, a nightside near -180 C.
function buildLine(): string {
  return (
    "Rename Mercury 'The Intern' because it crams a whole year into 88 days " +
    "and gets roasted on one side and frozen out on the other."
  );
}

const LINE = buildLine();

// The gate only accepts 1-200 characters of non-blank UTF-8 text.
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} characters to ${outPath}`);
