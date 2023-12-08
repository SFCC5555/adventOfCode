import {readFileSync} from "node:fs";

const lines = readFileSync("day2.txt", {encoding:"utf-8"});

console.log(lines);

let data = lines.split("\n");

let data2 = data.map(command=> {
    
    let c = command.split(" ");
    
    return c;
})

console.log(data2);

let position = 0;

let depth = 0;

for (let command of data2) {
    if (command[0]==="forward") {
        position+=parseInt(command[1]);
    }

    else if (command[0]==="up") {
        depth-= parseInt(command[1]);
    }

    else if (command[0]==="down") {
        depth+= parseInt(command[1]);
    }
}

console.log(position*depth)

//Part 2

console.log("Part 2***************************");

let position2 = 0;

let depth2 = 0;

let aim = 0;

for (let command of data2) {
    if (command[0]==="forward") {
        
        position2+=parseInt(command[1]);

        depth2+=aim*parseInt(command[1]);


    }

    else if (command[0]==="up") {
        aim-= parseInt(command[1]);
    }

    else if (command[0]==="down") {
        aim+= parseInt(command[1]);
    }
}

console.log(position2*depth2);



