// --- Day 2: Bathroom Security ---
import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const instructions: string[] = readFileSync(input, { encoding: "utf-8" }).split(
  "\n"
);

interface Position {
  x: number;
  y: number;
}

let position: Position = { x: 1, y: 1 };

const limits: Position = { x: 2, y: 2 };

let code: string = "";

interface ButtonMap {
  [key: string]: Position;
}

const buttons: ButtonMap = {
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

interface KeypadMoves {
  [key: string]: Position;
}

const keypadMoves: KeypadMoves = {
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
  R: { x: 1, y: 0 },
  L: { x: -1, y: 0 },
};

instructions.forEach((instruction: string): void => {
  instruction.split("").forEach((move: string): void => {
    const newXPosition: number = position.x + keypadMoves[move].x;
    const newYPosition: number = position.y + keypadMoves[move].y;

    position.x =
      newXPosition <= limits.x && newXPosition >= 0 ? newXPosition : position.x;
    position.y =
      newYPosition <= limits.y && newYPosition >= 0 ? newYPosition : position.y;
  });

  code += Object.keys(buttons).find(
    (b: string): boolean =>
      buttons[b].x === position.x && buttons[b].y === position.y
  );
});

console.log(`The bathroom code is: ${code}`); // Answer Part 1
