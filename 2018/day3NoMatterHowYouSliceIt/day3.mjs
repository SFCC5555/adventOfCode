import {readFileSync} from 'node:fs';

const lines = readFileSync('day3.txt',{encoding:'utf8'});

console.log(lines);

let data = lines.split('\n');

console.log(data);

let objectData = data.map(d => {

    let arrovaIndex = d.indexOf('@');

    let commaIndex = d.indexOf(',');

    let colonIndex = d.indexOf(':');

    let xIndex= d.indexOf('x');
    
    let iD = parseInt(d.slice(1,arrovaIndex-1)); 

    let marginLeft = parseInt(d.slice(arrovaIndex+2,commaIndex));

    let marginTop = parseInt(d.slice(commaIndex+1,colonIndex));

    let width = parseInt(d.slice(colonIndex+2,xIndex));

    let height = parseInt(d.slice(xIndex+1));

    return {

        iD,

        marginLeft,

        marginTop,
        
        width,

        height

    }


})


console.log(objectData);

let coordinatesData={};

let overlapCoordinates={};

for (let i of objectData) {

    for (let x=i.marginLeft;x<i.marginLeft+i.width;x++){
        for (let y=i.marginTop;y<i.marginTop+i.height;y++) {
            let coordinates = `${x},${y}`;
            
            if (coordinates in coordinatesData) {
                overlapCoordinates[coordinates] = true;
            } else {
                coordinatesData[coordinates] = true;
            }
        }
    }
}

console.log(coordinatesData);

console.log(overlapCoordinates);

let answer = Object.keys(overlapCoordinates).length;

console.log(answer);

//Part 2

console.log('Part 2 ******************************');

let cleanID;

for (let i of objectData) {

    let cleanCounter = 0

    for (let x=i.marginLeft;x<i.marginLeft+i.width;x++){
        for (let y=i.marginTop;y<i.marginTop+i.height;y++) {
            
            let coordinates = `${x},${y}`;

            if (coordinates in overlapCoordinates) {
                cleanCounter++
            }
            
        }
    }

    if (cleanCounter===0) {
        cleanID=i.iD;
    }
}

console.log(cleanID);