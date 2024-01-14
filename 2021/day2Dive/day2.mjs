// --- Day 2: Dive! ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const plannedCourse = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((step) => step.split(" "));

const position = { horizontalPosition: 0, depth: 0 };

const stepsMechanism = {
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

// console.log("Part 2***************************");

// let position2 = 0;

// let depth2 = 0;

// let aim = 0;

// for (let command of data2) {
//   if (command[0] === "forward") {
//     position2 += parseInt(command[1]);

//     depth2 += aim * parseInt(command[1]);
//   } else if (command[0] === "up") {
//     aim -= parseInt(command[1]);
//   } else if (command[0] === "down") {
//     aim += parseInt(command[1]);
//   }
// }

// console.log(position2 * depth2);
