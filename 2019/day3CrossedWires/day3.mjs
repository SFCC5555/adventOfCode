import {readFileSync} from "node:fs";

const lines = readFileSync("day3.txt",{encoding:"utf-8"});


let data = lines.split("\n");


let dataWire1 = data[0].split(",");

let dataWire2 = data[1].split(",");

console.log(dataWire1);
console.log(dataWire2);


function path(dataWire) {

    let x = 0;

    let y = 0;

    let steps = 0;

    let wirePath = {}

    for (let line of dataWire) {

        let direction = line[0];

        let distance = line.slice(1);

        for (let i=0;i<distance;i++) {

            if (direction === "R") {

                x++
            }

            else if (direction === "L") {
                x--
            }

            else if (direction === "U") {
                y++
            }

            else if (direction === "D") {
                y--
            }

            steps++

            let coordinates = `${x},${y}`;

            wirePath[coordinates] = steps;

        }
        
    }

    return wirePath

}

let wirePath1 = path(dataWire1);

let wirePath2 = path(dataWire2);

let crossPoints = [];

let lowerCrossSteps = [];

for (let i in wirePath1) {

    if (wirePath2.hasOwnProperty(i)) {
        
        let s = i.split(",");

        let z = [parseInt(s[0]),parseInt(s[1])];

        let sumSteps = wirePath1[i] + wirePath2[i];

        crossPoints.push(z);

        lowerCrossSteps.push(sumSteps);
    }

}

console.log(crossPoints);


let wireDistances = crossPoints.map(c=> {

    let d = Math.abs(c[0]) + Math.abs(c[1]);

    return d

}).sort();


console.log(wireDistances);

let answer = wireDistances[0];

console.log(answer);

//Part 2 

console.log("Part 2 ************************************")

lowerCrossSteps.sort();

console.log(lowerCrossSteps)

let answer2 = lowerCrossSteps[0];

console.log(answer2);