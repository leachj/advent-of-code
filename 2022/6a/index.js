const fs = require('fs');



const input = fs.readFileSync('input.txt', 'utf-8');

let index = 1;
let pointer = 0;
const buffer = []

const addToBuffer = (item) => {
    buffer[pointer] = item;
    pointer = (4 + pointer +1) % 4;
  }

  for( char of input) {
    addToBuffer(char)
    console.log(buffer)
    const occurences = buffer.filter(item => item != null).reduce((acc, cur) => { acc[cur] = true; return acc } , {})
    console.log(occurences)
    if(Object.keys(occurences).length == 4) {
        console.log(index)
        return index
    }
    index++
}

