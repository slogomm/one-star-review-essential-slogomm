import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = `${outputDir}/entry.txt`;
const content = "Oxygen: one star. Perfectly adequate until I pull the duvet over my head, at which point it simply runs out.";
writeFileSync(entryPath, content, { encoding: "utf8", flag: "w" });
// Revised after local test