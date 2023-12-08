import { hasSubscribers } from "node:diagnostics_channel";
import { readFileSync } from "node:fs";

const lines = readFileSync("day3.txt", { encoding: "utf-8"})

let data = lines.split("\n");

console.log(lines)

let coordinateX=0
let coordinateY=0

let coordinateXR=0
let coordinateYR=0

let coordinates=[coordinateX,coordinateY]

let coordinatesR=[coordinateXR,coordinateYR]

let houses=[[0,0]]

let turnCounter=1

for (let direction of lines) {
    turnCounter++

    if (turnCounter%2==0) {

        if (direction=="^") {
            coordinateY++
        }
    
        else if (direction=="v") {
            coordinateY--
        }
    
        else if (direction==">") {
            coordinateX++
        }
    
        else if (direction=="<") {
            coordinateX--
        }
    
        coordinates=[coordinateX,coordinateY]
        console.log(coordinates)
    
        let counter=0
        
        for (let house of houses) {
            if (coordinates[0]==house[0] && coordinates[1]==house[1]) {
                break
            }
    
            else {
                counter++
            }
    
            if (counter==houses.length) {
                houses.push(coordinates)
            }
        }

    }

    else {
        if (direction=="^") {
            coordinateYR++
        }
    
        else if (direction=="v") {
            coordinateYR--
        }
    
        else if (direction==">") {
            coordinateXR++
        }
    
        else if (direction=="<") {
            coordinateXR--
        }
    
        coordinatesR=[coordinateXR,coordinateYR]
    
        let counterR=0
        
        for (let house of houses) {
            if (coordinatesR[0]==house[0] && coordinatesR[1]==house[1]) {
                break
            }
    
            else {
                counterR++
            }
    
            if (counterR==houses.length) {
                houses.push(coordinatesR)
            }
        }

    }

}

console.log(houses)

console.log(houses.length)


