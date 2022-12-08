const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const forest = input.split("\n").map(row => row.split("").map(c => parseInt(c)))

const testVisibility = (line) => {
    let highest = -1
    return line.map(tree => {
        if(tree > highest) {
            highest = tree
            return true
        } 
        return false
    })
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

const left = forest.map(testVisibility)
const right = forest.map(row => [...testVisibility([...row].reverse())].reverse())
const down = transpose(transpose(forest).map(testVisibility))
const up = transpose(transpose(forest).map(row => [...testVisibility([...row].reverse())].reverse()))

const numVisible = left.reduce((rowAcc, leftRow, rowIndex) => {
    return rowAcc + leftRow.reduce((colAcc, leftCol, colIndex) => { 
        return colAcc + ((left[rowIndex][colIndex] || right[rowIndex][colIndex] || up[rowIndex][colIndex] || down[rowIndex][colIndex])?1:0)
    },0)
},0) 


console.log(numVisible)

// console.log(left)
// console.log(right)
// console.log(down)
// console.log(up)


//console.log(testVisibility(forest[0]))