import {readFileSync} from "node:fs";

const lines = readFileSync("day2.txt",{encoding:"utf-8"});


let data = lines.split("\n");


let data2 = data.map(i => {
    
    let j = i.replaceAll(" ","-");

    let k = j.replaceAll(":","");

    let l = k.split("-");

    return l
})

console.log(data2);

let validPasswords = 0;

for (let p of data2) {
    
    let r = new RegExp(p[2],"g");

    let m = p[3].match(r);

    if (m === null) {

    }

    else if (m.length >= parseInt(p[0]) && m.length <= parseInt(p[1])) {

        validPasswords++;

    }
}

console.log(validPasswords);

//Part 2

console.log("Part 2 *******************************");

let validPasswords2 = 0;

for (let s of data2) {

    if (s[2]===s[3][parseInt(s[0]-1)] && s[2]===s[3][parseInt(s[1]-1)]) {

    }

    else if (s[2]===s[3][parseInt(s[0]-1)] || s[2]===s[3][parseInt(s[1]-1)]) {
        validPasswords2++
    }

}

console.log(validPasswords2);
