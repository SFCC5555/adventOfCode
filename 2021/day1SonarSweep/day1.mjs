import {readFileSync} from "node:fs";

const lines = readFileSync("day1.txt",{encoding:"utf-8"});

//console.log(lines);

let data = lines.split("\n");

//console.log(data)

let numericData = data.map(function(s) {
    return parseInt(s)
})

console.log(numericData)

let counter = 0

for (let i=0;i<numericData.length-1;i++) {
    if (numericData[i+1]>numericData[i]) {
        //console.log("Increase")

        counter++
    }

    else {
        //console.log("Decrease")
    }
}

console.log(counter);

//Part 2

console.log("Part 2 *************************************")

let newData=[]

for (let u=0; u< numericData.length-2;u++) {

    let sum=numericData[u] + numericData[u+1] + numericData[u+2];

    newData.push(sum);

}

console.log(newData)

let counter2 = 0

for (let x=0;x<newData.length-1;x++) {
    if (newData[x+1]>newData[x]) {
        console.log("Increase")

        counter2++
    }

    else {
        console.log("Decrease")
    }
}


console.log(counter2);