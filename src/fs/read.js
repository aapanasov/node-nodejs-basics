import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const filePath = new URL('./files/fileToRead.txt', import.meta.url);
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();