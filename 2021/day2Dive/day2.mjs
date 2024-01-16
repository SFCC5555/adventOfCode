// --- Day 2: Dive! ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const plannedCourse = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((step) => step.split(" "));

let position = { horizontalPosition: 0, depth: 0 };

let stepsMechanism = {
  forward: { direction: "horizontalPosition", sense: 1 },
  up: { direction: "depth", sense: -1 },
  down: { direction: "depth", sense: 1 },
};

plannedCourse.forEach(([stepDirection, stepValue]) => {
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

//Part 2

position = { horizontalPosition: 0, depth: 0, aim: 0 };

stepsMechanism = {
  forward: { direction: "horizontalPosition", sense: 1, depthFactor: 1 },
  up: { direction: "aim", sense: -1, depthFactor: 0 },
  down: { direction: "aim", sense: 1, depthFactor: 0 },
};

plannedCourse.forEach(([stepDirection, stepValue]) => {
  position[stepsMechanism[stepDirection].direction] +=
    parseInt(stepValue) * stepsMechanism[stepDirection].sense;

  position.depth +=
    position.aim *
    parseInt(stepValue) *
    stepsMechanism[stepDirection].depthFactor;
});

console.log(
  `After following the the new instructions:\n Horizontal position: ${
    position.horizontalPosition
  }\n Depth: ${position.depth}\n Product: ${
    position.horizontalPosition * position.depth
  }`
); // Answer Part 2
