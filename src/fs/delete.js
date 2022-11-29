import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));
const fileToRemove = join(currentDir + '/files/fileToRemove.txt');


const remove = async () => {
    try {
        await rm(fileToRemove);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();