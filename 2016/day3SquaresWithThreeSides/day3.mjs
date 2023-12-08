import {readFileSync} from "node:fs"

const lines=readFileSync("day3.txt",{encoding:"utf-8"})

let data=lines.split("\n")

let sidesList=data.map(function(r) {
    
    let i= r.replaceAll("    ","   ")
    let p= i.replaceAll("   ","  ")
    let q= p.replaceAll("  "," ")

    let x=q.split(" ")

    let nL=[]
    
    for (let n of x) {
        let number=parseInt(n)

        nL.push(number)
    }

    //nL.sort((a,b)=>a-b) Part1

    return nL
})

//console.log(sidesList)

let posibleTriangle=0

for (let sides of sidesList) {

    if (sides[0]+sides[1]>sides[2]) {
        posibleTriangle++
    }
}

//console.log(posibleTriangle)

//Part 2

let columnList=[]

for (let columnSides=0; columnSides<sidesList.length;columnSides+=3) {

    let column1=[sidesList[columnSides][0],sidesList[columnSides+1][0],sidesList[columnSides+2][0]]

    columnList.push(column1)

    let column2=[sidesList[columnSides][1],sidesList[columnSides+1][1],sidesList[columnSides+2][1]]

    columnList.push(column2)

    
    let column3=[sidesList[columnSides][2],sidesList[columnSides+1][2],sidesList[columnSides+2][2]]

    columnList.push(column3)

}

for (let z of columnList) {
    z.sort((a,b)=>a-b)
}

console.log(columnList)

let posibleTriangleC=0

for (let sidesC of columnList) {

    if (sidesC[0]+sidesC[1]>sidesC[2]) {
        posibleTriangleC++
    }
}

console.log(posibleTriangleC)
