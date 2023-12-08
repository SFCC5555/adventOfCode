import {readFileSync} from "node:fs";

const lines = readFileSync("day2.txt",{encoding:"utf-8"});

let data = lines.split("\n");

console.log(data);

let counter2 = 0;

let counter3 = 0;

let two = data.map(s=> {

    for (let l of s) {

        let i = new RegExp(l,"g");

        let lList = s.match(i);

        if (lList.length===2) {
            
            counter2++

            break
            
        }

    }

    
});

let three = data.map(s=> {

    for (let l of s) {

        let i = new RegExp(l,"g");

        let lList = s.match(i);

        if (lList.length===3) {
            
            counter3++

            break
            
        }

    }

    
});



console.log(counter2)
console.log(counter3)


console.log(counter2*counter3)


//Part 2

let iD1

let iD2

let iD

let x

data.map(s=>{
    
    let status = 1

    for (let string of data) {

        let count=0

        let count2=0

        if (s===string) {

        }

        else if (status === 1) {

            for (let l=0; l<string.length;l++) {

                if (s[l]===string[l]) {
    
                    count++
    
                }

                else {
                    count2++

                    x = l

                }

                if (count2>1) {
                    break
                }
    
                if (count===string.length-1 && count2===1) {
    
                    iD1=s;
    
                    iD2=string;

                    iD=s.slice(0,x)+s.slice(x+1)

                    status=0

                    break
    
    
                }
    
    
    
            }

        }

        else {
            
            break
        }



    } 
});

console.log(iD1);

console.log(iD2);

console.log(iD);