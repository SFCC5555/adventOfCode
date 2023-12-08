import {readFileSync} from "node:fs";

const lines = readFileSync("day1.txt", {encoding:"utf-8"});

console.log(lines);

let data = lines.split("\n");

console.log(data);

let frequency=0

for (let value of data) {
    
    let numericValue = parseInt(value.slice(1))
    
    if (value[0]==="+") {

        frequency+=numericValue
    }

    else if (value[0]==="-") {
        frequency-=numericValue
    }
}

console.log(frequency)

//Part 2

console.log("Part 2 ******************************")

let frequency2=0

let frequencyList=[0]

let frequencyTwice

let i=1

while(frequencyTwice!==frequency2) {

    for (let value2 of data) {
        
        let numericValue2 = parseInt(value2.slice(1))
        
        if (value2[0]==="+") {
    
            frequency2+=numericValue2
        }
    
        else if (value2[0]==="-") {
            frequency2-=numericValue2
        }

        if (frequencyList.includes(frequency2)) {
            frequencyTwice=frequency2
            break
        }

        else {
            frequencyList.push(frequency2)
        }

        console.log(frequencyList)
    
    }


}



console.log(frequencyTwice)