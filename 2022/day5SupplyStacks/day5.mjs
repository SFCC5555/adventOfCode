import { readFileSync } from "node:fs";

const lines = readFileSync("day5.txt", { encoding: "utf-8"})

let data = lines.split("\n");

let rows=data.indexOf("")-1;

let stacks=data.slice(0,rows)


console.log(data)
console.log(rows)
console.log(stacks)

let newStacks=[]
let columns=0
for (let i of stacks) {
    let x=i.replaceAll("    ","[*]")
    let y=x.replaceAll(" ","")
    let z=y.replaceAll("[","")
    let u=z.replaceAll("]","")

    newStacks.push(u)

    console.log(u)
    columns=u.length
}

console.log(newStacks)
console.log(columns)

let invertStacks=[]

for (let c = 0; c <columns; c++) {
    invertStacks.push([])
}

console.log(invertStacks)

for (let a of newStacks) {
    let counterb=-1
    for (let b of a) {
        counterb++
        if (b=="*") {

        }

        else {
            invertStacks[counterb].unshift(b)
        }
    }
}

console.log(invertStacks)

let movesData=data.slice(rows+2)

console.log(movesData)

let moves =[]

for (let m of movesData) {
    let n=m.split(" ")

    moves.push(n)
}

console.log(moves)

//Part 1

/*for (let s of moves) {
    
    for (let k = 0; k <parseInt(s[1]); k++) {
        let q=invertStacks[parseInt(s[3])-1].pop()
        invertStacks[parseInt(s[5])-1].push(q)
    }

}

console.log(invertStacks2)
console.log(invertStacks)

let finalAnswer=""

for (let w of invertStacks) {
    let e=w.pop()
    finalAnswer+=e
}

console.log(finalAnswer)*/

//Part 2

console.log(invertStacks)

for (let r of moves) {
    let moved=[]
    for (let t = 0; t <parseInt(r[1]); t++) {
        let f=invertStacks[parseInt(r[3])-1].pop()
        
        moved.push(f)

    }
    console.log(moved)
    let movedReverse=moved.reverse()
    console.log(movedReverse)
    invertStacks[parseInt(r[5])-1]=invertStacks[parseInt(r[5])-1].concat(movedReverse)
    console.log(invertStacks)
}

console.log(invertStacks)

let finalAnswer2=""

for (let g of invertStacks) {
    let h=g.pop()
    finalAnswer2+=h
}

console.log(finalAnswer2)