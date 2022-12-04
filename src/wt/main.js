import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cpus } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerFile = join(__dirname, './worker.js');
let startNumber = 10;

const performCalculations = async () => {
    const workerPromises = cpus().map(() => new Promise((resolve, rejects) => {
        const worker = new Worker(workerFile, { workerData: startNumber++ });
        worker.on('message', msg => resolve(msg));
        worker.on('error', msg => rejects(msg));
    }));

    const workerResults = await Promise.allSettled(workerPromises);

    const results = workerResults.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }));

    console.log(results);
};

await performCalculations();