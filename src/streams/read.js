import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRead = join(__dirname, './files/fileToRead.txt');
const streamToRead = createReadStream(fileToRead, { encoding: 'utf8' });

const read = async () => {
    streamToRead.on('data', (chunk) => process.stdout.write(chunk));
    streamToRead.on('error', (err) => { throw new Error(err); });
};

await read();