const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const parseRange = (elf) => {
    const parts = elf.split("-")
    return ({begin: parseInt(parts[0]), end: parseInt(parts[1])})
}

const parseRanges = (line) => {
    const elves = line.split(",")
    return ({first: parseRange(elves[0]), second: parseRange(elves[1])})
}

const rangeContains = (num, range) => {
    return range.begin <= num && range.end >= num
}

const overlap = (data) => {
    for(let i = data.first.begin; i<= data.first.end; i++){
        if(rangeContains(i, data.second)) {
            return true
        }
    }
}

console.log(input.split("\n").map(parseRanges).filter(overlap).length)