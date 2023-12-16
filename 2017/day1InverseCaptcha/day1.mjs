// --- Day 1: Inverse Captcha ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

let lines = readFileSync(input, { encoding: "utf-8" });

lines += lines[0];

let sum = 0;

for (let i = 0; i < lines.length - 1; i++) {
  if (lines[i] === lines[i + 1]) {
    sum += parseInt(lines[i]);
  }
}

console.log(`The solution of the captcha is: ${sum}`); // Answer Part 1

//Part 2

// function part2() {
//   let sum = 0;

//   let steps = lines.length / 2;

//   for (let i = 0; i < lines.length; i++) {
//     if (i >= steps) {
//       if (lines[i] == lines[Math.abs(steps - i)]) {
//         sum += parseInt(lines[i]);
//       }
//     } else if (lines[i] == lines[i + steps]) {
//       sum += parseInt(lines[i]);
//     }
//   }

//   console.log(`solution: ${sum}`);
// }

// part2();
