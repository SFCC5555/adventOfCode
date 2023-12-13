// --- Day 1: Not Quite Lisp ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const instructions: string[] = readFileSync(input, {
  encoding: "utf-8",
}).split("");

let floor: number = 0;

instructions.forEach((instruction: string): void => {
  floor += instruction === "(" ? 1 : -1;
});

console.log(`The instructions take Santa to the floor: ${floor}`); //Answer Part 1

// Part 2

floor = 0;

const positionToEnterTheBasement: number =
  instructions.findIndex((instruction: string): boolean => {
    floor += instruction === "(" ? 1 : -1;
    return floor === -1;
  }) + 1;

console.log(
  `The position of the instruction to enter the basement is: ${positionToEnterTheBasement}`
); // Answer Part 2
