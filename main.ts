import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "I booked a meeting to circle back on the email about the meeting. Nobody had to reply.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
