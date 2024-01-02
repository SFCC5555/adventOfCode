// --- Day 2: Bathroom Security ---
import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const instructions = readFileSync(input, { encoding: "utf-8" }).split("\n");

let position = { x: 1, y: 1 };

const limits = { x: 2, y: 2 };

let code = "";

let buttons = {
  1: { x: 0, y: 2 },
  2: { x: 1, y: 2 },
  3: { x: 2, y: 2 },
  4: { x: 0, y: 1 },
  5: { x: 1, y: 1 },
  6: { x: 2, y: 1 },
  7: { x: 0, y: 0 },
  8: { x: 1, y: 0 },
  9: { x: 2, y: 0 },
};

const keypadMoves = {
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
  R: { x: 1, y: 0 },
  L: { x: -1, y: 0 },
};

instructions.forEach((instruction) => {
  instruction.split("").forEach((move) => {
    const newXPosition = position.x + keypadMoves[move].x;
    const newYPosition = position.y + keypadMoves[move].y;

    position.x =
      newXPosition <= limits.x && newXPosition >= 0 ? newXPosition : position.x;
    position.y =
      newYPosition <= limits.y && newYPosition >= 0 ? newYPosition : position.y;
  });

  code += Object.keys(buttons).find(
    (b) => buttons[b].x === position.x && buttons[b].y === position.y
  );
});

console.log(`The bathroom code is: ${code}`); // Answer Part 1

// Part 2

position = { x: 0, y: 2 };

code = "";

buttons = {
  1: { x: 2, y: 4 },
  2: { x: 1, y: 3 },
  3: { x: 2, y: 3 },
  4: { x: 3, y: 3 },
  5: { x: 0, y: 2 },
  6: { x: 1, y: 2 },
  7: { x: 2, y: 2 },
  8: { x: 3, y: 2 },
  9: { x: 4, y: 2 },
  A: { x: 1, y: 1 },
  B: { x: 2, y: 1 },
  C: { x: 3, y: 1 },
  D: { x: 2, y: 0 },
};

instructions.forEach((instruction) => {
  instruction.split("").forEach((move) => {
    const newXPosition = position.x + keypadMoves[move].x;
    const newYPosition = position.y + keypadMoves[move].y;
    const newPosition = { x: newXPosition, y: newYPosition };

    if (
      Object.values(buttons).find(
        (p) => p.x === newPosition.x && p.y === newPosition.y
      )
    ) {
      position = newPosition;
    }
  });

  code += Object.keys(buttons).find(
    (b) => buttons[b].x === position.x && buttons[b].y === position.y
  );
});

console.log(`The bathroom code is: ${code}`); // Answer Part 2
