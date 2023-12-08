import { readFileSync } from "node:fs";

const lines = readFileSync("day2.txt", { encoding: "utf-8"})

let strategy = lines.split("\n");
console.log(strategy)

//Part 1

let totalScore=0
let score=0

for (let i of strategy) {
    if (i[0]=="A") {
        if (i[2]=="X") {
            score=4
            totalScore+=score
        }
        else if (i[2]=="Y") {
            score=8
            totalScore+=score
        }
        else if (i[2]=="Z") {
            score=3
            totalScore+=score
        }
    }

    else if (i[0]=="B") {
        if (i[2]=="X") {
            score=1
            totalScore+=score
        }
        else if (i[2]=="Y") {
            score=5
            totalScore+=score
        }
        else if (i[2]=="Z") {
            score=9
            totalScore+=score
        }
    }

    else if (i[0]=="C") {
        if (i[2]=="X") {
            score=7
            totalScore+=score
        }
        else if (i[2]=="Y") {
            score=2
            totalScore+=score
        }
        else if (i[2]=="Z") {
            score=6
            totalScore+=score
        }
    }
}

console.log(totalScore)

//Part 2

let ultimateScore=0

for (let u of strategy) {
    if (u[0]=="A") {
        if (u[2]=="X") {
            score=3
            ultimateScore+=score
        }
        else if (u[2]=="Y") {
            score=4
            ultimateScore+=score
        }
        else if (u[2]=="Z") {
            score=8
            ultimateScore+=score
        }
    }

    else if (u[0]=="B") {
        if (u[2]=="X") {
            score=1
            ultimateScore+=score
        }
        else if (u[2]=="Y") {
            score=5
            ultimateScore+=score
        }
        else if (u[2]=="Z") {
            score=9
            ultimateScore+=score
        }
    }

    else if (u[0]=="C") {
        if (u[2]=="X") {
            score=2
            ultimateScore+=score
        }
        else if (u[2]=="Y") {
            score=6
            ultimateScore+=score
        }
        else if (u[2]=="Z") {
            score=7
            ultimateScore+=score
        }
    }
}

console.log(ultimateScore)