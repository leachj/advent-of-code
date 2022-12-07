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

const rangeContained = (range1, range2) => {
    return range1.begin <= range2.begin && range1.end >= range2.end
}

const fullyContained = (data) => {
    return rangeContained(data.first, data.second) || rangeContained(data.second, data.first)
}

console.log(input.split("\n").map(parseRanges).filter(fullyContained).length)