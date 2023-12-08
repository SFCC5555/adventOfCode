import {readFileSync} from "node:fs";

const lines = readFileSync("day3.txt",{encoding:"utf-8"});

console.log(lines);

let data = lines.split("\n");

function masterFunction(code) {

    data = lines.split("\n");

    for (let l=0; data.length!==1;l++) {
    
        let list=[];
    
        for (let n of data[0]) {
            list.push(0);
        };
    
        for (let number of data) {
            
            for (let i=0;i<number.length;i++) {
    
                if (number[i]==="1") {
                    list[i]++;
                }
            } 
        }

        function binary() {
    
            let rate = list.map((n)=> {
            
                let bit=0

                if (code==="0") {

                    if (n<data.length/2) {
                        bit=1;
                    }

                }

                else {

                    if (n>=data.length/2) {
                        bit=1;
                    }

                }


            
                return bit
            
            })
    
            return rate
        }

        let key = binary()[l];

        data=data.filter(x=> {
            return x[l]==key;
        })

    
    }

    return data[0].split("");


}

let oxygen = masterFunction("1");

console.log(oxygen);

let cO2 = masterFunction("0");

console.log(cO2);



function decimal(binaryList) {

    let decimalNum=0;

    let power=binaryList.length;

    for (let b of binaryList) {

        power--;

        decimalNum+=(b)*(2**power)

    }

    return decimalNum

}


let oxygenRate = decimal(oxygen);

console.log(oxygenRate);

let cO2Rate = decimal(cO2);

console.log(cO2Rate);

let lifeSupport = oxygenRate*cO2Rate;

console.log(lifeSupport)