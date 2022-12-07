const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const findCommonItem = (rucksacks) => {

    const first = rucksacks[0]
    const second = rucksacks[1]
    const third = rucksacks[2]
    for(char of first.split("")){
        if(second.includes(char) && third.includes(char)) return char
    }
}

const itemToPriority = (item) => {
    if(item == item.toLowerCase()){
        console.log("lower")
        return item.charCodeAt(0) - 96
    } else {
        console.log("upper")

        return (item.charCodeAt(0) - 64)+26
    }
    
}

const chunkArray = (array, size) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk)
    }
    return result
}

const inputLines = input.split(["\n"])
const chunks = chunkArray(inputLines, 3)

console.log(chunks.map(findCommonItem).map(itemToPriority).reduce((acc,cur) => acc+cur))
