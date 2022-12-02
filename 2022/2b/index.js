const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const letterToRPS = (letter) => {
    switch(letter) {
        case "A":
        case "X":
            return "ROCK"
        case "B":
        case "Y":
            return "PAPER"
        case "C":
        case "Z":
            return "SCISSORS"
    }
}

const winScore = (round) => {

    if(round.you == round.opp) {
        return 3
    }

    if ((round.you == "ROCK" && round.opp == "SCISSORS") 
        || (round.you == "SCISSORS" && round.opp == "PAPER") 
        || (round.you == "PAPER" && round.opp == "ROCK")) {
        return 6
    }

    return 0
}

const playScore = (play) => {
    switch(play) {
        case "ROCK":
            return 1
        case "PAPER":
            return 2
        case "SCISSORS":
            return 3
    }
}

const calculateScore = (round) => {
    return winScore(round) + playScore(round.you)
}

const plays = {
    WIN: {
        ROCK: "PAPER",
        SCISSORS: "ROCK",
        PAPER: "SCISSORS"
    },
    LOOSE: {
        ROCK: "SCISSORS",
        SCISSORS: "PAPER",
        PAPER: "ROCK"
    }
}

const calculatePlay = (oppPlay, outcome) => {
    switch(outcome) {
        case "X":
            return plays.LOOSE[oppPlay]
        case "Y":
            return oppPlay
        case 'Z':
            return plays.WIN[oppPlay]
    }
}

const rounds = input.split('\n')
    .map(line => ({opp: letterToRPS(line.substring(0,1)), you: calculatePlay(letterToRPS(line.substring(0,1)), line.substring(2,3))}))

console.log(rounds)

const scores = rounds.map(round => calculateScore(round))

console.log(scores.reduce((acc,cur) => acc+cur))
