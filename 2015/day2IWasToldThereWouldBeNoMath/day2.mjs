import { readFileSync } from "node:fs";

const lines = readFileSync("day2.txt", { encoding: "utf-8"})

let data = lines.split("\n");

console.log(data)

let sumTotalAreas=0

let sumTotalRibbon=0

for (let dimentionsData of data) {
    let dimentions=dimentionsData.split("x")
    console.log(dimentions)

    let l=dimentions[0]
    let w=dimentions[1]
    let h=dimentions[2]

    let area1=2*l*w
    let area2=2*w*h
    let area3=2*h*l

    let areas=[area1,area2,area3]

    console.log(areas)

    let smallArea=Math.min(...areas)/2

    console.log(smallArea)

    let totalArea=area1+area2+area3+smallArea

    console.log(totalArea)

    sumTotalAreas+=totalArea

    //Part 2

    let perimeter1=2*l+2*w
    let perimeter2=2*w+2*h
    let perimeter3=2*h+2*l

    let perimeters=[perimeter1,perimeter2,perimeter3]

    console.log(perimeters)

    let smallPerimeter=Math.min(...perimeters)

    let perfectBow=l*w*h

    let totalRibbon=smallPerimeter+perfectBow

    sumTotalRibbon+=totalRibbon

}

console.log(sumTotalAreas)

console.log(sumTotalRibbon)