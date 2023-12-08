import {readFileSync} from 'node:fs';

const lines = readFileSync('./day4.txt',{encoding:'utf-8'});

let data = lines.split('\n');

let optimizedData = data.map(l=>{
    l = l.replaceAll(/[\[\]]/g,'');

    l = l.split(/ falls | wakes | Guard /);

    return l
})

optimizedData.sort();

console.log(optimizedData);

let obj = {};

let id;

for (let j=0;j<optimizedData.length;j++) {

    let i = optimizedData[j];

    if (/^\#/.test(i[1])) {

        let lastId = id;

        let index = i[1].indexOf(' ');

        id=i[1].slice(1,index);

        if (!(id in obj)) {
            obj[id] = {asleep:{},up:{}}
        }

        if (j!==0) {

            if (optimizedData[j-1][1]==='asleep') {
                   
                for (let t=parseInt(optimizedData[j-1][0].slice(-2));t<60;t++) {
                    
                    if (obj[lastId].asleep[t]) {
                        obj[lastId].asleep[t]++;
                    } else {
                        obj[lastId].asleep[t]=1;
                    }     
                    
                }
                
            } else {

                for (let t=parseInt(optimizedData[j-1][0].slice(-2));t<60;t++) {
                    
                    if (obj[lastId].up[t]) {
                        obj[lastId].up[t]++;
                    } else {
                        obj[lastId].up[t]=1;
                    }        
                }

            }
        }

    } else if (/^a/.test(i[1])) {

        for (let t=parseInt(optimizedData[j-1][0].slice(-2));t<=parseInt(i[0].slice(-2))-1;t++) {
                    
            if (obj[id].up[t]) {
                obj[id].up[t]++;
            } else {
                obj[id].up[t]=1;
            }     
            
        }

    } else {

        for (let t=parseInt(optimizedData[j-1][0].slice(-2));t<=parseInt(i[0].slice(-2))-1;t++) {
                    
            if (obj[id].asleep[t]) {
                obj[id].asleep[t]++;
            } else {
                obj[id].asleep[t]=1;
            }                
        }

    }
}

console.log(obj);

let mostSleep=[0,0];

let mostFrequentMinute=[0,0,0]; //Part 2

for (let i in obj) {

    let counter=0;
    
    for (let j in obj[i].asleep) {
        counter+=obj[i].asleep[j]

        if (obj[i].asleep[j]>mostFrequentMinute[0]) {
            mostFrequentMinute=[obj[i].asleep[j],j,i]
        }
    }

    if (counter>mostSleep[0]) {
        mostSleep = [counter,i]
    }
}

console.log(mostSleep)

let minute=[0,0];

for (let i in obj[mostSleep[1]].asleep) {

    if (obj[mostSleep[1]].asleep[i]>minute[0]) {
        minute = [obj[mostSleep[1]].asleep[i],i]
    }  
}

console.log(minute);

let answer = parseInt(mostSleep[1])*parseInt(minute[1]);


console.log(answer);

//Part 2

console.log(mostFrequentMinute);

let answerPart2 = parseInt(mostFrequentMinute[1])*parseInt(mostFrequentMinute[2]);

console.log(answerPart2);