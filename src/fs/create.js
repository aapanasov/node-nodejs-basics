import { writeFile } from 'node:fs/promises';

const create = async () => {
    try {
        const filePath = new URL('./files/fresh.txt', import.meta.url);
        await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();