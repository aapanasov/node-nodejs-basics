import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = join(__dirname, './files/fileToCompress.txt.gz');
const destination = join(__dirname, './files/fileToCompress.txt');
const gunzip = createGunzip();

const decompress = async () => {
    pipeline(
        createReadStream(source),
        gunzip,
        createWriteStream(destination),
        (err) => { if (err) throw err; }
    );
};

await decompress();