import { readFileSync } from "node:fs";

const input: string = "day3Input.txt";

const triangleSidesList: number[][] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((triangle: string) => triangle.split(/ +/).map(Number));

const possibleTriangles: number = triangleSidesList.reduce(
  (total: number, triangle: number[]): number => {
    const [side1, side2, side3]: number[] = triangle.sort(
      (a: number, b: number): number => a - b
    );

    return side1 + side2 > side3 ? total + 1 : total + 0;
  },
  0
);

console.log(
  `There are ${possibleTriangles} possible triangles listed in the puzzle input`
); // Answer Part 1
