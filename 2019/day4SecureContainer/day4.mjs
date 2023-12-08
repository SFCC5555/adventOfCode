import {readFileSync} from 'node:fs';

const lines = readFileSync('./day4.txt',{encoding:'utf-8'});

let data = lines.split('-');

let min = data[0];

let max = data[1];

let counter = 0;

for (let i = min; i<=max;i++ ) {

    i = i.toString();
     
    if (/(\d)\1/.test(i)) {


        if (i[5]>=i[4]&&i[4]>=i[3]&&i[3]>=i[2]&&i[2]>=i[1]&&i[1]>=i[0]) {
            counter++
            console.log(i)
        }

    } 
}

console.log(counter);