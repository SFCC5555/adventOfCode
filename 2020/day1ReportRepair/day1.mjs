import {readFileSync} from "node:fs";

const lines = readFileSync("day1.txt",{encoding:"utf-8"});

let data = lines.split("\n");

console.log(data);

let counter1=0

let answer

for (let number of data) {
    counter1++

    let counter2=0
    for (let n of data) {

        counter2++

        if (counter1===counter2) {

        }

        else if (parseInt(number)+parseInt(n)<2020) {
            
            let sum = parseInt(number)+parseInt(n)
            
            
            let counter3=0
            for (let i of data) {

                if (counter3===counter2 || counter3===counter1) {

                }
                
                else if (sum + parseInt(i)===2020) {

                    answer=parseInt(number)*parseInt(n)*parseInt(i)

                    break


                }


            }
            

        }

    }
}

console.log(answer)
