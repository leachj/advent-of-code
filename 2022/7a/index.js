const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const tree = {size: 0, children: {}}
current = tree

const processCommand = (line) => {
    if(line.startsWith("$ cd")){
        if(line.includes("..")) {
            current = current.parent
        } else {
            const matches = line.match(/cd ([a-z]+)/)
            current.children[matches[1]] = { parent: current, size: 0, children: {} }
            current = current.children[matches[1]]
        }
    }
    
}

const processLine = (line) => {

    if(line.startsWith("$")) {
        processCommand(line)
    } else {
        const matches = line.match(/^(\d+)/)

        if(matches) {
            current.size = current.size + parseInt(matches[1])
        }
    }
}

let total = 0;

const calculateSizes = (node) => {
    node.totalSize = node.size + Object.values(node.children).reduce((acc,cur) => acc + calculateSizes(cur),0)
    if(node.totalSize <= 100000) {
        total += node.totalSize
    }
    return node.totalSize
}


input.split("\n").forEach(processLine)

calculateSizes(tree)


console.log(tree)
console.log(total)



