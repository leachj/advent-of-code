const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

let headPos = [0,0]
let tailPos = [0,0]
let history = [tailPos]

const move = (direction, currentPosition) => {
    
    //console.log("moving ",direction)
    switch(direction) {
        case "U":
            return [currentPosition[0], currentPosition[1]+1]
        case "D":
            return [currentPosition[0], currentPosition[1]-1]
        case "L":
            return [currentPosition[0]-1, currentPosition[1]]
        case "R":
            return [currentPosition[0]+1, currentPosition[1]]
    }
}

const moveTail = (headPos, tailPos) => {

    if(headPos[0] == tailPos[0]) {
        //same column
        if(headPos[1] > tailPos[1] && headPos[1] - tailPos[1] > 1 ) {
            //above
            return move("U", tailPos)
        }
        if(headPos[1] < tailPos[1] && tailPos[1] - headPos[1] > 1 ) {
            //below
            return move("D", tailPos)
        }
    } 
    if(headPos[1] == tailPos[1]) {
        //same row
        if(headPos[0] > tailPos[0] && headPos[0] - tailPos[0] > 1 ) {
            //right
            return move("R", tailPos)
        }
        if(headPos[0] < tailPos[0] && tailPos[0] - headPos[0] > 1 ) {
            //left
            return move("L", tailPos)
        }
    }
    if(Math.abs(headPos[0] - tailPos[0]) <= 1 && Math.abs(headPos[1] - tailPos[1]) <= 1 ){
        return tailPos
    }

    if(headPos[0] > tailPos[0] && headPos[1] > tailPos[1]) {
        // NE
        tailPos = move("U", tailPos)
        tailPos = move("R", tailPos)
        return tailPos
    }
    if(headPos[0] > tailPos[0] && headPos[1] < tailPos[1]) {
        // SE
        tailPos = move("D", tailPos)
        tailPos = move("R", tailPos)
        return tailPos
    }
    if(headPos[0] < tailPos[0] && headPos[1] > tailPos[1]) {
        // NW
        tailPos = move("U", tailPos)
        tailPos = move("L", tailPos)
        return tailPos
    }
    if(headPos[0] < tailPos[0] && headPos[1] < tailPos[1]) {
        // SW
        tailPos = move("D", tailPos)
        tailPos = move("L", tailPos)
        return tailPos
    }
    
    
}

const processMove = (headDirection) => {
    headPos = move(headDirection, headPos)
    tailPos = moveTail(headPos, tailPos)
    history.push(tailPos)
    console.log(" H ", headPos, " T ", tailPos)

    
}

input.split("\n").forEach(element => {
    const [direction, amount] = element.split(" ")
    Array.from({ length: parseInt(amount) }).forEach(() => {
        processMove(direction)
    });
    
});


const unique = history.reduce((acc, cur) => { acc[`${cur[0]},${cur[1]}`] = true; return acc;}, {})

//const unique = [...new Set(history)];
console.log(Object.keys(unique).length)

// for(let i =5; i>=0; i--) {
//     let line = ''
//     for(let j = 0; j<7; j++){
//         //console.log([j,i])
//         if(unique.some(item => item[0] == j && item[1] == i)){
//             line += "T"

//         } else {
//             line += "."
//         }
//     }
//     console.log(line)
// }

// console.log(unique)