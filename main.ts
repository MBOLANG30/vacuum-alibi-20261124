// The Vacuum's Alibi: One Line, 200 Characters.
// A robot vacuum's deadpan log entry explaining why it missed a spot.
// Writes the line to <output-dir>/entry.txt (default /output, the dir the
// grader mounts). The gate requires UTF-8 text of 1 to 200 characters, a
// single line, not only white space, with no trailing newline.
// Usage: node main.ts [output-dir]   (default: /output)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Log 214: the spot under the rug registered as a sleeping cat. I do not vacuum sleeping cats. It has been three days.";

// Gate validation: 1-200 characters, one line, not only white space.
if (line.length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("line must be a single non-empty line");
}

const outDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Create the output directory if needed; never delete it or its contents.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
