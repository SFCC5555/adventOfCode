import {readFileSync} from "node:fs"

const lines = readFileSync("day1.txt",{encoding:"utf-8"})


//Part 1

function part1() {

    let sum=0

    for (let i=0;i<lines.length;i++) {
    
        if (i==lines.length-1) {
            if (lines[i]==lines[0]) {
                sum+=parseInt(lines[i])
            }
        }
        
        else if (lines[i]==lines[i+1]) {
            sum+=parseInt(lines[i])
        }
    }
    
    console.log(`solution: ${sum}`)

}

part1()

//Part 2

function part2() {

    let sum=0

    let steps=lines.length/2

    for (let i=0;i<lines.length;i++) {
    
        if (i>=steps) {
            if (lines[i]==lines[Math.abs(steps-i)]) {
                sum+=parseInt(lines[i])
            }
        }
        
        else if (lines[i]==lines[i+steps]) {
            sum+=parseInt(lines[i])
        }
    }
    
    console.log(`solution: ${sum}`)

}

part2()