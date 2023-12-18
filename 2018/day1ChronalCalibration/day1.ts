// --- Day 1: Chronal Calibration ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const sequenceOfChanges: number[] = readFileSync(input, {
  encoding: "utf-8",
})
  .split("\n")
  .map((change) => parseInt(change));

let frequency: number = sequenceOfChanges.reduce(
  (current: number, change: number): number => current + change,
  0
);

console.log(`The frequency after all of the changes is: ${frequency}`); // Answer Part 1

//Part 2

frequency = 0;

const frequencyRecord: Set<number> = new Set();

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
