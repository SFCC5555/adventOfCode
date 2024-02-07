// --- Day 3: Perfectly Spherical Houses in a Vacuum ---

import { readFileSync } from "node:fs";

const input = "day3Input.txt";

const directions = readFileSync(input, { encoding: "utf-8" }).split("");

const directionsMechanism = {
  "<": { axis: "x", value: -1 },
  ">": { axis: "x", value: 1 },
  "^": { axis: "y", value: 1 },
  v: { axis: "y", value: -1 },
};

const coordinates = { x: 0, y: 0 };

let housesVisited = { "0,0": 1 };

directions.forEach((direction) => {
  const { axis, value } = directionsMechanism[direction];

  coordinates[axis] += value;

  const currentPosition = `${coordinates.x},${coordinates.y}`;
  housesVisited[currentPosition] = housesVisited[currentPosition]
    ? housesVisited[currentPosition] + 1
    : 1;
});

const numHousesWithPresents = Object.keys(housesVisited).length;
console.log(
  `The number of houses that receive at least one present is: ${numHousesWithPresents}`
); // Answer Part 1

// Part 2

const coordinatesSanta = { x: 0, y: 0 };

const coordinatesRoboSanta = { x: 0, y: 0 };

housesVisited = { "0,0": 2 };

directions.forEach((direction, index) => {
  const turn = index + 1;
  const { axis, value } = directionsMechanism[direction];

  let newPosition;

  if (turn % 2 === 0) {
    coordinatesRoboSanta[axis] += value;
    newPosition = `${coordinatesRoboSanta.x},${coordinatesRoboSanta.y}`;
  } else {
    coordinatesSanta[axis] += value;
    newPosition = `${coordinatesSanta.x},${coordinatesSanta.y}`;
  }

  housesVisited[newPosition] = housesVisited[newPosition]
    ? housesVisited[newPosition] + 1
    : 1;
});

const numHousesWithPresentsNextYear = Object.keys(housesVisited).length;

console.log(
  `The number of houses that receive at least one present on the next year is: ${numHousesWithPresentsNextYear}`
); // Answer Part 2
