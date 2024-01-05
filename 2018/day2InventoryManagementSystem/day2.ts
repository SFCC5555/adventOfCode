// --- Day 2: Inventory Management System ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const likely_candidates: string[] = readFileSync(input, {
  encoding: "utf-8",
}).split("\n");

let twoTimes: number = 0;

let threeTimes: number = 0;

likely_candidates.forEach((candidate: string): void => {
  const letters: Record<string, number> = {};
  for (let letter of candidate) {
    letters[letter] = letter in letters ? letters[letter] + 1 : 1;
  }

  twoTimes += new Set(Object.values(letters)).has(2) ? 1 : 0;

  threeTimes += new Set(Object.values(letters)).has(3) ? 1 : 0;
});

const checksum: number = twoTimes * threeTimes;

console.log(
  `The number of box IDs that contain a letter which appears exactly two times is: ${twoTimes}`
);
console.log(
  `The number of box IDs that contain a letter which appears exactly three times is: ${threeTimes}`
);
console.log(`The checksum of the list of box IDs is: ${checksum}`); // Answer Part 1
