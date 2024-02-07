// --- Day 3: Perfectly Spherical Houses in a Vacuum ---

import { readFileSync } from "node:fs";

const input = "day3Input.txt";

const directions = readFileSync(input, { encoding: "utf-8" });

const directionsMechanism = {
  "<": { axis: "x", value: -1 },
  ">": { axis: "x", value: 1 },
  "^": { axis: "y", value: 1 },
  v: { axis: "y", value: -1 },
};

const coordinates = { x: 0, y: 0 };

const housesVisited = { "0,0": 1 };

for (let direction of directions) {
  const { axis, value } = directionsMechanism[direction];

  coordinates[axis] += value;

  const currentPosition = `${coordinates.x},${coordinates.y}`;
  housesVisited[currentPosition] = housesVisited[currentPosition]
    ? housesVisited[currentPosition] + 1
    : 1;
}

const numHousesWithPresents = Object.keys(housesVisited).length;
console.log(
  `The number of houses that receive at least one present is: ${numHousesWithPresents}`
); // Answer Part 1
