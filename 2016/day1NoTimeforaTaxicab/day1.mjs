// --- Day 1: No Time for a Taxicab ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const instructions = readFileSync(input, { encoding: "utf-8" }).split(", ");

let coordinates = { x: 0, y: 0 };

const locations = { "0-0": true }; // Part 2

const locationsRevisited = []; // Part 2

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
    const { newDirection, value } = mechanism[faceDirection][sense];
    const axis = mechanism[faceDirection].axis;

    // Part 2

    for (let step = 1; step <= steps; step++) {
      const location =
        axis === "x"
          ? `${coordinates.x + step * value}-${coordinates.y}`
          : `${coordinates.x}-${coordinates.y + step * value}`;
      if (location in locations) {
        axis === "x"
          ? locationsRevisited.push({
              x: coordinates.x + step * value,
              y: coordinates.y,
            })
          : locationsRevisited.push({
              x: coordinates.x,
              y: coordinates.y + step * value,
            });
      } else {
        locations[location] = true;
      }
    }

    // Part 1

    coordinates[axis] += steps * value;
    faceDirection = newDirection;
  }
});

// Part 1

const blocksAway = Math.abs(coordinates.x) + Math.abs(coordinates.y);

console.log(
  `The coordinates of the destination are { x: ${coordinates.x}, y: ${coordinates.y}} and they are ${blocksAway} blocks away.`
); // Answer Part 1

// Part 2

const firstLocationRevisited = locationsRevisited[0] || {
  x: "None",
  y: "None",
};

const blocksAwayPart2 =
  Math.abs(firstLocationRevisited.x) + Math.abs(firstLocationRevisited.y);

console.log(
  `The coordinates of the destination (first location revisited) are { x: ${
    firstLocationRevisited.x
  }, y: ${firstLocationRevisited.y}} and they are ${
    blocksAwayPart2 || "None"
  } blocks away.`
); // Answer Part 2
