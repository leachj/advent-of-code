const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const findCommonItem = (rucksack) => {

    const first = rucksack.substring(0, rucksack.length/2)
    const second = rucksack.substring(rucksack.length/2)
    for(char of first.split("")){
        if(second.includes(char)) return char
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

console.log(input.split("\n").map(findCommonItem).map(itemToPriority).reduce((acc,cur) => acc+cur))