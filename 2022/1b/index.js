const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const elvesArray = input.split('\n\n')
    .map(line => line.split('\n')
    .map(value => parseInt(value)))

const elvesTotals = elvesArray
    .map(elf => elf.reduce((prev, cur) => prev+cur ))

function compareNumbers(a, b) {
    return b - a;
    }

elvesTotals.sort(compareNumbers)

console.log(elvesTotals)

console.log(elvesTotals[0] + elvesTotals[1] + elvesTotals[2])