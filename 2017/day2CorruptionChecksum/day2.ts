// --- Day 2: Corruption Checksum ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const spreadsheet: number[][] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((row: string): number[] => row.split(/\s+/).map(Number));

const checksum: number = spreadsheet.reduce(
  (sum: number, row: number[]): number =>
    sum + Math.max(...row) - Math.min(...row),
  0
);

console.log(`The checksum for the spreadsheet is: ${checksum}`); // Answer part 1

// Part 2

const secondChecksum: number = spreadsheet.reduce(
  (sum: number, row: number[]): number => {
    for (let index: number = 0; index < row.length; index++) {
      const a: number = row[index];
      const b: number | undefined = row
        .slice(index + 1)
        .find((number: number): boolean => {
          return a % number === 0 || number % a === 0;
        });
      if (b) {
        return sum + Math.max(a, b) / Math.min(a, b);
      }
    }
    return sum;
  },
  0
);

console.log(
  `The checksum for the division of the evenly divisible values of the spreadsheet is: ${secondChecksum}`
); // Answer part 2
