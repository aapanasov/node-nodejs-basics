import { Transform, pipeline } from 'node:stream';

const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, enc, callback) {
            const chunkString = chunk.toString().trim();
            const reversedChunk = chunkString.split('').reverse().join('');

            this.push(reversedChunk + '\n');

            callback();
        }
    });

    pipeline(
        process.stdin,
        transformStream,
        process.stdout,
        (err) => console.log(err)
    );
};

await transform();