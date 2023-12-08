import {readFileSync} from 'node:fs';

const lines = readFileSync('./day5.txt',{encoding:'utf-8'});

let data = lines.split('\n').map(n=>parseInt(n));

const dataLength = data.length;

let position = 0;

let steps = 0;

while(position>=0 && position<=dataLength-1) {
    
    if (data[position]>=3) {
        data[position]--;
        position+=data[position]+1;
    } else {
        data[position]++;
        position+=data[position]-1;
    }
    
    
    steps++
}

console.log(steps);