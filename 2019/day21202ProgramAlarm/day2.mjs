import {readFileSync} from "node:fs";
import { parse } from "node:path";

const lines = readFileSync("day2.txt",{encoding:"utf-8"});

//console.log(lines)

let data = lines.split(",");

console.log(data);

let numericData = data.map(n=>parseInt(n));

//console.log(numericData);

let finalOutPut = 19690720

for (let u=0;u<100;u++) {

    numericData = data.map(n=>parseInt(n));
    
    for (let v=0;v<100;v++) {

        numericData = data.map(n=>parseInt(n));

        numericData[1]=u;

        numericData[2]=v;

        runProgram()

        if (numericData[0]===finalOutPut) {
            
            let noun = u;

            let verb = v;

            let answer=100*noun+verb

            console.log(answer)

            break


        }

    }
}



function runProgram() {


    for (let i=0;i<numericData.length-3;i+=4) {
    
        let code = numericData[i];
        
        let inPutPosition1 = numericData[i+1];
    
        let inPutPosition2 = numericData[i+2];
        
        let outPutPosition = numericData[i+3];
    
    
        let inPut1 = numericData[inPutPosition1];
    
        let inPut2 = numericData[inPutPosition2];
    
        let outPut
    
        
        if (code===1) {
    
            outPut = inPut1+inPut2;
    
        }
    
        else if (code===2) {
            
            outPut = inPut1*inPut2;
    
        }
    
        else if (code===99) {
            break
        }
    
        numericData[outPutPosition] = outPut 
    }
    
    //console.log(numericData[0])


}

