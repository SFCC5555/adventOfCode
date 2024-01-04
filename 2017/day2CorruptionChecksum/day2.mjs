// --- Day 2: Corruption Checksum ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const spreadsheet = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((row) => row.split(/\s+/).map(Number));

const checksum = spreadsheet.reduce(
  (sum, row) => sum + Math.max(...row) - Math.min(...row),
  0
);

console.log(`The checksum for the spreadsheet is: ${checksum}`); // Answer part 1

// Part 2

const secondChecksum = spreadsheet.reduce((sum, row) => {
  for (let index = 0; index < row.length; index++) {
    const a = row[index];
    const b = row.slice(index + 1).find((number) => {
      return a % number === 0 || number % a === 0;
    });
    if (b) {
      return sum + Math.max(a, b) / Math.min(a, b);
    }
  }
  return sum;
}, 0);

console.log(
  `The checksum for the division of the evenly divisible values of the spreadsheet is: ${secondChecksum}`
); // Answer part 2
