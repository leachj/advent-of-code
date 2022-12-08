const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const forest = input.split("\n").map(row => row.split("").map(c => parseInt(c)))

const getAbove = (row, col, limit) => {
    //console.log(row, col, limit)
    let trees = 0
    for(let i = row-1; i>= 0; i-- ){
       // console.log(i, forest[i][col])
        trees++
        if(forest[i][col] >= limit) {
            return trees
        }
    }
    return trees
}

const getBelow = (row, col, limit) => {
    let trees = 0
    for(let i = row+1; i<forest[0].length; i++ ){
        trees++
        if(forest[i][col] >= limit) {
            return trees
        }
    }
    return trees
}

const getLeft = (row, col, limit) => {
    let trees = 0
    for(let i = col-1; i>= 0; i-- ){
        trees++
        if(forest[row][i] >= limit) {
            return trees
        }
    }
    return trees
}

const getRight = (row, col, limit) => {
    let trees = 0
    for(let i = col+1; i< forest[0].length; i++ ){
        trees++
        if(forest[row][i] >= limit) {
            return trees
        }
    }
    return trees
}

const calculateScore = (row, col) => {
    const currentTree = forest[row][col]

    return getAbove(row, col, currentTree) * getBelow(row, col, currentTree) * getLeft(row, col, currentTree) * getRight(row, col, currentTree)
}

const scores = forest.map((row, rowIndex) => row.map((col, colIndex) => calculateScore(rowIndex, colIndex)))

const max = scores.reduce((acc, cur) => {
    const rowMax = cur.reduce((acc2, cur2) => cur2>acc2?cur2:acc2, 0)
    return rowMax>acc?rowMax:acc
}, 0)

console.log(max)

