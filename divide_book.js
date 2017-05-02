"use strict"

const range = (upper) => [...Array(upper).keys()];

const usage = () => {
    console.log("node divide_book.js <nbr> [<segments>]");
    process.exit();
}

const numberOfPages = parseInt(process.argv[2]) || usage();
const segments = parseInt(process.argv[3]) || 7;

const segmentSize = Math.floor(numberOfPages/segments);

for (const i of range(segments)) {
    console.log(i*segmentSize);
}
