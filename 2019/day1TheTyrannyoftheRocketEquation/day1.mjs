import {readFileSync} from "node:fs";

const lines = readFileSync("day1.txt",{encoding:"utf-8"});

let data = lines.split("\n");

console.log(data);

let totalFuel=0

//Part 2

for (let mass of data) {
    
    while(mass > 0) {

        let fuel = Math.floor(mass/3)-2

        if (fuel>0) {
            
            totalFuel+=fuel
        }
        
        mass=fuel

    }

}

console.log(totalFuel)