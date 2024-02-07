// --- Day 3: Perfectly Spherical Houses in a Vacuum ---

import { readFileSync } from "node:fs";

const input: string = "day3Input.txt";

const directions: string = readFileSync(input, { encoding: "utf-8" });

interface DirectionMechanism {
  [key: string]: { axis: string; value: number };
}

const directionsMechanism: DirectionMechanism = {
  "<": { axis: "x", value: -1 },
  ">": { axis: "x", value: 1 },
  "^": { axis: "y", value: 1 },
  v: { axis: "y", value: -1 },
};

interface Coordinates {
  x: number;
  y: number;
}

const coordinates: Coordinates = { x: 0, y: 0 };

interface HousesVisited {
  [key: string]: number;
}

const housesVisited: HousesVisited = { "0,0": 1 };

for (const direction of directions) {
  const { axis, value }: { axis: string; value: number } =
    directionsMechanism[direction];

  coordinates[axis] += value;

  const currentPosition: string = `${coordinates.x},${coordinates.y}`;
  housesVisited[currentPosition] = housesVisited[currentPosition]
    ? housesVisited[currentPosition] + 1
    : 1;
}

const numHousesWithPresents: number = Object.keys(housesVisited).length;
console.log(
  `The number of houses that receive at least one present is: ${numHousesWithPresents}`
); // Answer Part 1
