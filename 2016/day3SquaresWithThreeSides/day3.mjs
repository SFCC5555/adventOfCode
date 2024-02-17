import { readFileSync } from "node:fs";

const input = "day3Input.txt";

const triangleSidesList = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((triangle) => triangle.split(/ +/).map(Number));

let possibleTriangles = triangleSidesList.reduce((total, triangle) => {
  const [side1, side2, side3] = [...triangle].sort((a, b) => a - b);

  return side1 + side2 > side3 ? total + 1 : total + 0;
}, 0);

console.log(
  `There are ${possibleTriangles} possible triangles listed in the puzzle input`
); // Answer Part 1

// Part 2

possibleTriangles = 0;

for (let i = 0; i < triangleSidesList.length; i += 3) {
  const [triangle1, triangle2, triangle3] = triangleSidesList.slice(i, i + 3);

  const newTriangles = [
    [triangle1[0], triangle2[0], triangle3[0]],
    [triangle1[1], triangle2[1], triangle3[1]],
    [triangle1[2], triangle2[2], triangle3[2]],
  ];

  newTriangles.forEach((triangle) => {
    const [side1, side2, side3] = [...triangle].sort((a, b) => a - b);
    if (side1 + side2 > side3) {
      possibleTriangles += 1;
    }
  });
}

console.log(
  `There are ${possibleTriangles} possible triangles listed in the puzzle input reading by columns`
); // Answer Part 2
