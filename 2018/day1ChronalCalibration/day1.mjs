// --- Day 1: Chronal Calibration ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const sequenceOfChanges = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((change) => parseInt(change));

let frequency = sequenceOfChanges.reduce(
  (current, change) => current + change,
  0
);

console.log(`The frequency after all of the changes is: ${frequency}`); // Answer Part 1

//Part 2

frequency = 0;

const frequencyRecord = new Set();

while (!frequencyRecord.has(frequency)) {
  for (let change of sequenceOfChanges) {
    frequencyRecord.add(frequency);
    frequency += change;
    if (frequencyRecord.has(frequency)) {
      break;
    }
  }
}

console.log(
  `The first frequency that the device reaches twice is: ${frequency}`
); // Answer Part 2
