import {readFileSync} from "node:fs"

const lines = readFileSync("day5.txt",{ encoding: "utf-8"})

let data = lines.split("\n")

console.log(data)

//Part 1

/*let nice=0

let naughty=0
  
for (let string of data) {

    let numberOfVowels=0

    let rule1

    let rule2

    let rule3
    
    for (let letter of string) {

        if (letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u") {

            numberOfVowels++

        }

    }

    if (numberOfVowels>=3) {
        rule1="OK"
    }

    for (let u in string) {

        let i=parseInt(u)

        if (string[i]==string[i+1]) {

            rule2="OK"

            break

        }
    }


    if (string.includes("ab") || string.includes("cd") || string.includes("pq") || string.includes("xy")) {

    }

    else {
        rule3="OK"
    }

    if (rule1=="OK" && rule2=="OK" && rule3=="OK") {
        
        nice++
        
        console.log("nice")
    }

    else {
        naughty++
        
        console.log("naughty")
    }

}


console.log("There are "+naughty+" naughty strings")

console.log("There are "+nice+" nice strings")*/

//Part 2

let nice=0

let naughty=0
  
for (let string of data) {

    let numberOfVowels=0

    let rule1

    let rule2

    
    for (let l in string) {

        let lp=parseInt(l)

        let pair=string.slice(lp,lp+2)

        if (string.includes(pair,lp+2)) {
            rule1="OK"
            break
        }

    }

    for (let u in string) {

        let i=parseInt(u)

        if (string[i]==string[i+2]) {

            rule2="OK"

            break

        }
    }

    if (rule1=="OK" && rule2=="OK") {
        
        nice++
        
        console.log("nice")
    }

    else {
        naughty++
        
        console.log("naughty")
    }

}


console.log("There are "+naughty+" naughty strings")

console.log("There are "+nice+" nice strings")