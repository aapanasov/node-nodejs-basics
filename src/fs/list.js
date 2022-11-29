import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));
const dirToRead = join(currentDir + '/files');

const list = async () => {
    try {
        const files = await readdir(dirToRead);
        files.forEach((file) => console.log(file));
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();