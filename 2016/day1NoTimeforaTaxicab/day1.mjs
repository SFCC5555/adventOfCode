// --- Day 1: No Time for a Taxicab ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const instructions = readFileSync(input, { encoding: "utf-8" }).split(", ");

let coordinates = { x: 0, y: 0 };

let faceDirection = "N";

const mechanism = {
  N: {
    axis: "x",
    R: { newDirection: "E", value: 1 },
    L: { newDirection: "W", value: -1 },
  },
  S: {
    axis: "x",
    R: { newDirection: "W", value: -1 },
    L: { newDirection: "E", value: 1 },
  },
  E: {
    axis: "y",
    R: { newDirection: "S", value: -1 },
    L: { newDirection: "N", value: 1 },
  },
  W: {
    axis: "y",
    R: { newDirection: "N", value: 1 },
    L: { newDirection: "S", value: -1 },
  },
};

instructions.forEach((instruction) => {
  const sense = instruction[0];
  const steps = parseInt(instruction.slice(1));
  if (!isNaN(steps) && (sense === "R" || sense === "L")) {
    coordinates[mechanism[faceDirection].axis] +=
      steps * mechanism[faceDirection][sense].value;
    faceDirection = mechanism[faceDirection][sense].newDirection;
  }
});

const blocksAway = Math.abs(coordinates.x) + Math.abs(coordinates.y);

console.log(
  `The coordinates of the destination are { x: ${coordinates.x}, y: ${coordinates.y}} and they are ${blocksAway} blocks away.`
); // Answer Part 1
