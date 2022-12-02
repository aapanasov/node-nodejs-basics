import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToWrite = join(__dirname, './files/fileToWrite.txt');
const streamToWrite = createWriteStream(fileToWrite, { encoding: 'utf8' });

const write = async () => {
    process.stdin.on('data', (chunk) => streamToWrite.write(chunk));
};

await write();