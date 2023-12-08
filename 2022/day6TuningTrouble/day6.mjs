import { readFileSync } from "node:fs";

const data = readFileSync("day6.txt", { encoding: "utf-8"})


console.log(data)
console.log(data.length)


for (let i = 0; i< data.length; i++) {

    if (data[i]==data[i+1] || data[i]==data[i+2] || data[i]==data[i+3]) {
        
    }
    else if (data[i+1]==data[i+2] || data[i+1]==data[i+3]){

    }

    else if (data[i+2]==data[i+3]){

    }

    else {
        let answer=i+4
        console.log(answer)
        break
    }

}

//Part 2

let status="on"

for (let u = 0; u< data.length; u++) {

    for (let j = 0; j< 14; j++) {
        let dataSection= data.slice(j+u+1,14+u)

        console.log(dataSection)

        if (dataSection.includes(data[j+u])) {
            break
        }
    
        else {
            
            let counter=j

            if (counter==13) {
                

                let answer=u+14
                console.log(answer)
                status="of"

                break
            }
        }


    }
    
    if (status=="of") {
        break
    }
}
