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
    coordinates[mechanism[faceDirection].axis] +=
      steps * mechanism[faceDirection][sense].value;
    faceDirection = mechanism[faceDirection][sense].newDirection;
  }
});

const blocksAway: number = Math.abs(coordinates.x) + Math.abs(coordinates.y);

console.log(
  `The coordinates of the destination are { x: ${coordinates.x}, y: ${coordinates.y}} and they are ${blocksAway} blocks away.`
); // Answer Part 1
