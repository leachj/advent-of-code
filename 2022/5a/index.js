const fs = require('fs');

// [G]                 [D] [R]        
// [W]         [V]     [C] [T] [M]    
// [L]         [P] [Z] [Q] [F] [V]    
// [J]         [S] [D] [J] [M] [T] [V]
// [B]     [M] [H] [L] [Z] [J] [B] [S]
// [R] [C] [T] [C] [T] [R] [D] [R] [D]
// [T] [W] [Z] [T] [P] [B] [B] [H] [P]
// [D] [S] [R] [D] [G] [F] [S] [L] [Q]
//  1   2   3   4   5   6   7   8   9 

const crates = [
    ["D", "T", "R", "B", "J", "L", "W", "G"],
    ["S", "W", "C"],
    ["R", "Z", "T", "M"],
    ["D", "T", "C", "H", "S", "P", "V"],
    ["G", "P", "T", "L", "D", "Z"],
    ["F", "B", "R", "Z", "J", "Q", "C", "D"],
    ["S", "B", "D", "J", "M", "F", "T", "R"],
    ["L", "H", "R", "B", "T", "V", "M"],
    ["Q", "P", "D", "S", "V"]
]


const input = fs.readFileSync('input.txt', 'utf-8');

// move 1 from 3 to 5
const processCommand = (line) => {
    const parts = line.match(/move (\d+) from (\d+) to (\d+)/)
    const amount = parseInt(parts[1])
    const from = parseInt(parts[2])-1
    const to = parseInt(parts[3])-1
    console.log(amount, from, to)

    for(let i =0; i< amount; i++) {
        doMove(from, to)
    }
}

const doMove = (from, to) => {
    const crate = crates[from].pop()
    crates[to].push(crate)
}

input.split("\n").forEach(processCommand)

console.log(crates.map(stack => stack.pop()).join(""))

