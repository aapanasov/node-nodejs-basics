import { rename as setName, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

const src = join(currentDir + '/files/wrongFilename.txt');
const dest = join(currentDir + '/files/properFilename.md');

const isExist = async (path) => {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
};

const rename = async () => {
    if (await isExist(dest)) {
        throw new Error('FS operation failed');
    }

    try {
        await setName(src, dest);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();