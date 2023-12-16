// --- Day 1: Inverse Captcha ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

let lines: string = readFileSync(input, { encoding: "utf-8" });

lines += lines[0];

let sum: number = 0;

for (let i: number = 0; i < lines.length - 1; i++) {
  if (lines[i] === lines[i + 1]) {
    sum += parseInt(lines[i]);
  }
}

console.log(`The solution of the captcha is: ${sum}`); // Answer Part 1
