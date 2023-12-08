import {readFileSync} from 'node:fs';

const lines = readFileSync('./day5.txt',{encoding:'utf-8'});

let data = lines.split('');

let unitList = '';

for (let u of data) {

    if (!unitList.includes(u.toLowerCase())) {
        unitList+=u.toLowerCase();
    }
}


let poliList = [];

for (let r of unitList) {

    const poli = data.filter(p=>p!==r && p!==r.toUpperCase()); 

    poliList.push(poli);
}

//console.log(poliList);


function react(list) {

    let status = false;

    while(status===false) {

        for (let i=0;i<list.length-1;i++) {

            if (list[i]!==list[i+1]&&list[i].toUpperCase()===list[i+1].toUpperCase()) {
                
                list.splice(i,2)
                
                break;
            }

            if (i===list.length-2) {
                status = true;
                break;
            }

        }

    }

    //console.log(list.length);

    return list.length

}

let lengthList = poliList.map(l=>react(l));

console.log(lengthList)

console.log(Math.min(...lengthList));