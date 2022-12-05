import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToSpawn = join(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {

    const childProcess = spawn('node', [fileToSpawn, ...args]);
    childProcess.stdout.pipe(process.stdout);
    process.stdin.pipe(childProcess.stdin);

};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);