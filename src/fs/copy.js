import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

const src = join(currentDir + '/files');
const dest = join(currentDir + '/files_copy');

const copy = async () => {
    try {
        await mkdir(dest, { recursive: false });
        await cp(src, dest, { recursive: true, errorOnExist: true, force: false });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

copy();