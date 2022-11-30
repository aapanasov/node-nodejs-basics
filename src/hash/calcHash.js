import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const fileBuffer = await readFile(filePath);
    const hashSum = createHash('sha256').update(fileBuffer).digest('hex');

    console.log(hashSum);
};

await calculateHash();