import {readFileSync} from "node:fs";

const lines = readFileSync("day3.txt",{encoding:"utf-8"});

console.log(lines);

let data = lines.split(`\n`);

console.log(data);

function trees(x,y) {

    let counter = -x;

    let tree = 0;

    for (let i=0;i<data.length;i+=y) {
        
        counter+=x;

        if (counter>=data[i].length) {
            
            counter-=data[i].length;
        }

        //console.log(data[i][counter])

        if (data[i][counter]==="#") {
            
            
            tree++;

        }

    }

    return tree

}

let slopes= [[1,1],[3,1],[5,1],[7,1],[1,2]];

let answer = 1

for (let s of slopes) {
    
    let numTress = trees(s[0],s[1])

    answer *=numTress
}

console.log(answer);




