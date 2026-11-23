import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello: six words are the whole story; the reader supplies everything else.
// thinking_revised: the turn lands on "didn't" -- loss implied, never named.
// batch: one entry, one output file, one size log -- deliberately small.
// orders: make the directory, write the bytes, report the size, in that order.
// bar: nothing is appended after the last word; the silence is the point.

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dir = isAbsolute(outputDir) ? outputDir : join(ownDir, outputDir);

const STORY = "He came home. The dog didn't.";

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), STORY, 'utf8');
console.log(`${Buffer.byteLength(STORY, 'utf8')} bytes`);
