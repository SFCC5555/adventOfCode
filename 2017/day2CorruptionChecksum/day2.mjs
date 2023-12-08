import {readFileSync} from "node:fs"

const lines = readFileSync("day2.txt",{encoding:"utf-8"})

let data = lines.split("\n")

let data2= data.map(function(i) {
    
    let u=i.replaceAll("\t"," ")
    let x=u.split(" ")

    return x
})

//console.log(data2)

let data3= data2.map(function(z) {
    let s=z.map(function(f) {
        let c=parseInt(f)
        return c
    })

    return s
})

console.log(data3)

let diferenceList = data3.map(function(numbers) {
    
    numbers.sort(function(a,b) {
        return a-b
    })

    //console.log(numbers)

    let diference = parseInt(numbers[numbers.length-1])- parseInt(numbers[0])

    return diference

    })

console.log(diferenceList)

let checkSum = diferenceList.reduce(function(a,b) {
    return a+b
})

console.log(checkSum)

console.log("Part 2 ***************************")

let checkSum2=0

for (let numberList of data3) {

    let counter1=0

    for (let number of numberList) {

        counter1++
        let counter2=0
        for (let n of numberList) {
            
            counter2++
            
            if (counter1===counter2) {

            }
            else if (number%n===0) {
                let divition=number/n

                checkSum2+=divition

                console.log(divition);
            }
        }
    }

}

console.log(checkSum2)