import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const instructions: string[] = readFileSync(input, { encoding: "utf-8" }).split(
  ", "
);

interface Coordinates {
  x: number;
  y: number;
}

let coordinates: Coordinates = { x: 0, y: 0 };

const locations: Record<string, boolean> = { "0-0": true }; // Part 2

const locationsRevisited: Coordinates[] = []; // Part 2

type Direction = "N" | "E" | "S" | "W";
type Sense = "R" | "L";

let faceDirection: Direction = "N";

interface MechanismDetail {
  newDirection: Direction;
  value: number;
}

interface Mechanism {
  axis: "x" | "y";
  R: MechanismDetail;
  L: MechanismDetail;
}

const mechanism: Record<Direction, Mechanism> = {
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

instructions.forEach((instruction: string): void => {
  const sense: Sense = instruction[0] as Sense;
  const steps: number = parseInt(instruction.slice(1), 10);
  if (!isNaN(steps) && (sense === "R" || sense === "L")) {
    const axis: "x" | "y" = mechanism[faceDirection].axis;
    const { newDirection, value } = mechanism[faceDirection][sense];

    // Part 2

    for (let step: number = 1; step <= steps; step++) {
      const location: string =
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

const blocksAway: number = Math.abs(coordinates.x) + Math.abs(coordinates.y);

console.log(
  `The coordinates of the destination are { x: ${coordinates.x}, y: ${coordinates.y}} and they are ${blocksAway} blocks away.`
); // Answer Part 1

// Part 2

const firstLocationRevisited: Coordinates = locationsRevisited[0] || {
  x: "None",
  y: "None",
};

const blocksAwayPart2: number =
  Math.abs(firstLocationRevisited.x) + Math.abs(firstLocationRevisited.y);

console.log(
  `The coordinates of the destination (first location revisited) are { x: ${
    firstLocationRevisited.x
  }, y: ${firstLocationRevisited.y}} and they are ${
    blocksAwayPart2 || "None"
  } blocks away.`
); // Answer Part 2
