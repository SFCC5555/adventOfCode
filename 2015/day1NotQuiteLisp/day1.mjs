import { readFileSync } from "node:fs";

const lines = readFileSync("day1.txt", { encoding: "utf-8"})

let data = lines.split("\n");

//Parte 1

//Solución Alterna

/*let dataList = [...lines]

console.log(dataList)

let directionValue=0

let dataValuesList=dataList.map(function(direction) {
    if (direction=="(") {
       directionValue=1
    }

    else {
        directionValue=-1
    }

    return directionValue
})

console.log(dataValuesList)

let level=dataValuesList.reduce(function(a,b) {
    return a+b
})

console.log(level)*/

console.log(lines)

let level=0

let counter=0

for (let direction of lines) {
    if (direction=="(") {
        level++
        counter++
    }

    else {
        level--
        counter++
    }

    if (level==-1) {
        console.log(counter)
    }
}

console.log("floor: "+level)