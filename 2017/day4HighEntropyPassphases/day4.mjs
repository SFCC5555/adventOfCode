import {readFileSync} from 'node:fs';

const lines = readFileSync('./day4.txt',{encoding:'utf-8'});

let data = lines.split('\n');

console.log(data);

let valid = 0;

let invalid = 0;

for (let p of data) {

    let obj={};

    let arr=p.split(' ');

    for (let w of arr) {

        w = w.split('');
        w.sort();//Part 2
        w = w.join('');

        if (w in obj) {
            
            obj[w]++;
        } else {
            obj[w]=1;
        }

    }

    let values = Object.values(obj);

    if (values.some(v=>v>1)) {
        invalid++
    } else {
        valid++
    }
}

console.log('valid',valid);
console.log('invalid',invalid);
