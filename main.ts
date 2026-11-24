import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryText = 'Gravity: one star. I set my phone down beside me. By morning it is on the floor. It has never once done the reverse.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entryText);

// Revised after local test