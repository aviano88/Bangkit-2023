const fs = require('fs');
const { resolve } = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15,
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));
readableStream.on('readble', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        // Catch the error when the chunk cannot be read.
    }   
});

readableStream.on('end', () => {
    writableStream.end();
});