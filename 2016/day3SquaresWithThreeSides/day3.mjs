import { readFileSync } from "node:fs";

const input = "day3Input.txt";

const triangleSidesList = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((triangle) => triangle.split(/ +/).map(Number));

const possibleTriangles = triangleSidesList.reduce((total, triangle) => {
  const [side1, side2, side3] = triangle.sort((a, b) => a - b);

  return side1 + side2 > side3 ? total + 1 : total + 0;
}, 0);

console.log(
  `There are ${possibleTriangles} possible triangles listed in the puzzle input`
); // Answer Part 1

//Part 2

// let columnList=[]

// for (let columnSides=0; columnSides<sidesList.length;columnSides+=3) {

//     let column1=[sidesList[columnSides][0],sidesList[columnSides+1][0],sidesList[columnSides+2][0]]

//     columnList.push(column1)

//     let column2=[sidesList[columnSides][1],sidesList[columnSides+1][1],sidesList[columnSides+2][1]]

//     columnList.push(column2)

//     let column3=[sidesList[columnSides][2],sidesList[columnSides+1][2],sidesList[columnSides+2][2]]

//     columnList.push(column3)

// }

// for (let z of columnList) {
//     z.sort((a,b)=>a-b)
// }

// console.log(columnList)

// let posibleTriangleC=0

// for (let sidesC of columnList) {

//     if (sidesC[0]+sidesC[1]>sidesC[2]) {
//         posibleTriangleC++
//     }
// }

// console.log(posibleTriangleC)
