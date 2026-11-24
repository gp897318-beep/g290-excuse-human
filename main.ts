import { mkdirSync, writeFileSync } from "node:fs";

// Writes `text` to /output/entry.txt, creating /output when needed.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

const excuse =
  "I moved the deadline to a meeting that never existed, then attended it faithfully for three days.";

writeEntry(excuse);
