// --- Day 2: Dive! ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const plannedCourse: string[][] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((step) => step.split(" "));

interface Position {
  horizontalPosition: number;
  depth: number;
}

interface StepsMechanism {
  [key: string]: { direction: keyof Position; sense: 1 | -1 };
}

const position: Position = { horizontalPosition: 0, depth: 0 };

const stepsMechanism: StepsMechanism = {
  forward: { direction: "horizontalPosition", sense: 1 },
  up: { direction: "depth", sense: -1 },
  down: { direction: "depth", sense: 1 },
};

plannedCourse.forEach(([stepDirection, stepValue]: string[]): void => {
  position[stepsMechanism[stepDirection].direction] +=
    parseInt(stepValue) * stepsMechanism[stepDirection].sense;
});

console.log(
  `After following the planned course:\n Horizontal position: ${
    position.horizontalPosition
  }\n Depth: ${position.depth}\n Product: ${
    position.horizontalPosition * position.depth
  }`
); // Answer Part 1
