const parseArgs = () => {
    const inputArgs = process.argv.slice(2);

    const result = inputArgs
        .map((arg, index, array) => {
            if (array[index + 1] && arg.startsWith('--')) {
                return `${arg.slice(2)} is ${array[index + 1]}`;
            }
        })
        .filter((arg) => arg)
        .join(', ');

    console.log(result);
};

parseArgs();