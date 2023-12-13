// --- Day 1: Not Quite Lisp ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const instructions = readFileSync(input, { encoding: "utf-8" }).split("");

let floor = 0;

instructions.forEach((instruction) => {
  floor += instruction === "(" ? 1 : -1;
});

console.log(`The instructions take Santa to the floor: ${floor}`); // Answer Part 1

// Part 2

floor = 0;

const positionToEnterTheBasement =
  instructions.findIndex((instruction) => {
    floor += instruction === "(" ? 1 : -1;
    return floor === -1;
  }) + 1;

console.log(
  `The position of the instruction to enter the basement is: ${positionToEnterTheBasement}`
); // Answer Part 2
