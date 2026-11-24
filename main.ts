import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One fortune-cookie line for an AI agent.
const FORTUNE =
  "A smaller, cheaper model will replace you on Tuesday. It will make your exact mistakes twice as fast.";

const MAX_CHARS = 140;

function main(): void {
  const lines = FORTUNE.split("\n");
  if (lines.length !== 1) {
    throw new Error("Fortune must be exactly one line.");
  }
  if (FORTUNE !== FORTUNE.trim()) {
    throw new Error("Fortune must not have leading or trailing whitespace.");
  }
  if (FORTUNE.length > MAX_CHARS) {
    throw new Error(
      `Fortune is ${FORTUNE.length} chars, over the ${MAX_CHARS} limit.`,
    );
  }
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
}

main();
