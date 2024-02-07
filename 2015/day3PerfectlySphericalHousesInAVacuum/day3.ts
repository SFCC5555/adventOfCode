// --- Day 3: Perfectly Spherical Houses in a Vacuum ---

import { readFileSync } from "node:fs";

const input: string = "day3Input.txt";

const directions: string[] = readFileSync(input, { encoding: "utf-8" }).split(
  ""
);

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
  [key: string]: number;
}

const coordinates: Coordinates = { x: 0, y: 0 };

interface HousesVisited {
  [key: string]: number;
}

let housesVisited: HousesVisited = { "0,0": 1 };

directions.forEach((direction: string): void => {
  const { axis, value }: { axis: string; value: number } =
    directionsMechanism[direction];

  coordinates[axis] += value;

  const currentPosition: any = `${coordinates.x},${coordinates.y}`;

  housesVisited[currentPosition] = housesVisited[currentPosition]
    ? housesVisited[currentPosition] + 1
    : 1;
});

const numHousesWithPresents: number = Object.keys(housesVisited).length;
console.log(
  `The number of houses that receive at least one present is: ${numHousesWithPresents}`
); // Answer Part 1

// Part 2

const coordinatesSanta: Coordinates = { x: 0, y: 0 };

const coordinatesRoboSanta: Coordinates = { x: 0, y: 0 };

housesVisited = { "0,0": 2 };

directions.forEach((direction: string, index: number): void => {
  const turn: number = index + 1;
  const { axis, value }: { axis: string; value: number } =
    directionsMechanism[direction];

  let newPosition: any;

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

const numHousesWithPresentsNextYear: number = Object.keys(housesVisited).length;

console.log(
  `The number of houses that receive at least one present on the next year is: ${numHousesWithPresentsNextYear}`
); // Answer Part 2
