import { readFileSync } from "node:fs";

const lines = readFileSync("day4.txt", { encoding: "utf-8"})

let data = lines.split("\n");

console.log(data)

let sectionsPairsData=[]

for (let x of data) {
    let y=x.replace(",","-")
    sectionsPairsData.push(y)
}

console.log(sectionsPairsData)

let count=0
let count2=0

for (let i of sectionsPairsData) {
    let sectionPairs=i.split("-")
    console.log(sectionPairs)

    if (parseInt(sectionPairs[0])>=parseInt(sectionPairs[2]) && parseInt(sectionPairs[1])<=parseInt(sectionPairs[3])) {
        count+=1
        count2+=1
        console.log("Full")
    }

    else if (parseInt(sectionPairs[0])<=parseInt(sectionPairs[2]) && parseInt(sectionPairs[1])>=parseInt(sectionPairs[3])) {
        count+=1
        count2+=1
        console.log("Full")
    }

    else if (parseInt(sectionPairs[0])>=parseInt(sectionPairs[2]) && parseInt(sectionPairs[3])>=parseInt(sectionPairs[0])) {
        count2+=1
        console.log("Partial")
    }

    else if (parseInt(sectionPairs[0])<=parseInt(sectionPairs[2]) && parseInt(sectionPairs[1])>=parseInt(sectionPairs[2])) {
        count2+=1
        console.log("Partial")
    }
    else {
        console.log("OK")
    }

    }

    console.log(count)
    console.log(count2)