const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const elvesArray = input.split('\n\n')
    .map(line => line.split('\n')
    .map(value => parseInt(value)))

const elvesTotals = elvesArray
    .map(elf => elf.reduce((prev, cur) => prev+cur ))

const max = Math.max(...elvesTotals);

console.log(max)