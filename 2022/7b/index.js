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

let closest = 1000000000000;

const calculateSizes = (node) => {
    node.totalSize = node.size + Object.values(node.children).reduce((acc,cur) => acc + calculateSizes(cur),0)
    return node.totalSize
}

const findClosest = (node, target) => {
    Object.values(node.children).forEach(cur => findClosest(cur, target))

    if(node.totalSize >= target && node.totalSize - target < closest - target) {
        closest = node.totalSize
    }
    return node.totalSize
}


input.split("\n").forEach(processLine)

calculateSizes(tree)

const freeSpace = (70000000 - tree.totalSize)
const neededSpace = 30000000 - freeSpace

console.log("free: ", freeSpace)
console.log("needed: ", neededSpace)

findClosest(tree, neededSpace  )

//console.log(tree)
console.log(closest)



