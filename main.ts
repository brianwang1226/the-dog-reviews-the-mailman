// The Dog Reviews the Mailman — one-line dog review of the mailman (139 chars).
// A grudge in review form: bills through the door slot at 11am sharp, he runs,
// 317 barks logged, and the verdict is pure dog vocabulary — would not fetch again.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. He shoves bills through my door slot at 11am sharp, then runs. I have barked at him 317 times. My verdict: would not fetch again.";

const MAX_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
