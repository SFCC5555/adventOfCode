import { readFileSync } from 'node:fs';

let lines = readFileSync('./day4.txt',{encoding:'utf-8'}).replaceAll('\n',' ');

let data = lines.split('  ');

let newData = data.map(i=>{

    let obj = {};

    let arr = i.split(' ');

    for (let j of arr) {
        
        let secondArr = j.split(':');

        obj[secondArr[0]] = secondArr[1];
    }

    return obj;
});

//console.log(newData);

let validationData = newData.map(i=> {

    let l = Object.keys(i).length;

    if (l<7) {
        return false;
    } else if (l===7){

        if ('cid' in i) {
            return false;
        } else {
            return i;
        }


    } else {
        return i;
    }

});

//console.log(validationData);

let validPassports = validationData.filter(i=>i);

let answer =  validPassports.length;

console.log(answer);

//Part 2

console.log('*************************************************');

let superValidPassports = validPassports.filter(i=>(parseInt(i.byr)>=1920 && parseInt(i.byr)<=2002)
                                                    && (parseInt(i.iyr)>=2010 && parseInt(i.iyr)<=2020)
                                                    && (parseInt(i.eyr)>=2020 && parseInt(i.eyr)<=2030)
                                                    && (/^\d+(in|cm)$/.test(i.hgt) && i.hgt.slice(-2)==='in'?(parseInt(i.hgt.slice(0,-2))>=59&&parseInt(i.hgt.slice(0,-2))<=76):(parseInt(i.hgt.slice(0,-2))>=150&&parseInt(i.hgt.slice(0,-2))<=193))
                                                    && (/^\#[a-f0-9]{6}$/.test(i.hcl))
                                                    && (/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(i.ecl))
                                                    && (/^\d{9}$/.test(i.pid))

)

console.log(superValidPassports);

let answer2 = superValidPassports.length;

console.log(answer2);