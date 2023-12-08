import {readFileSync} from "node:fs";

const lines = readFileSync("day3Prueba.txt",{encoding:"utf-8"});

console.log(lines);

let data = lines.split("\n");

let gammaList=[];

let epsilonList=[];

for (let n of data[0]) {
    gammaList.push(0);
    epsilonList.push(0);
};

for (let number of data) {
    
    for (let i=0;i<number.length;i++) {

        if (number[i]==="0") {
            epsilonList[i]++
        }

        else {
            gammaList[i]++
        }

    } 
}

console.log(gammaList);

console.log(epsilonList);

function binary(List) {

    let rate = List.map((n)=> {
    
        let bit = 0
        
        if (n>=data.length/2) {
            
            bit = 1;
        }
    
        return bit
    
    })

    return rate
}



let gammaRateBin = binary(gammaList);

console.log(gammaRateBin);

let epsilonRateBin = binary(epsilonList);

console.log(epsilonRateBin);


function decimal(binaryList) {

    let decimalNum=0;

    let power=binaryList.length;

    for (let b of binaryList) {

        power--;

        decimalNum+=(b)*(2**power)

    }

    return decimalNum

}

let gammaRate = decimal(gammaRateBin);

console.log(gammaRate);

let epsilonRate = decimal(epsilonRateBin);

console.log(epsilonRate);

let powerConsumption = gammaRate*epsilonRate;

console.log(powerConsumption);
