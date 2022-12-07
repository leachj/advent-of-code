const fs = require('fs');



const input = fs.readFileSync('input.txt', 'utf-8');

let index = 1;
let pointer = 0;
const buffer = []
const target = 14

const addToBuffer = (item) => {
    buffer[pointer] = item;
    pointer = (target + pointer +1) % target;
  }

  for( char of input) {
    addToBuffer(char)
    console.log(buffer)
    const occurences = buffer.filter(item => item != null).reduce((acc, cur) => { acc[cur] = true; return acc } , {})
    console.log(occurences)
    if(Object.keys(occurences).length == target) {
        console.log(index)
        return index
    }
    index++
}

