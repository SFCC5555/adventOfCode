// --- Day 2: Rock Paper Scissors ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const strategyGuide: string[][] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((round) => round.split(" "));

interface Points {
  [key: string]: number;
}

const points: Record<string, Points> = {
  X: { shape: 1, A: 3, B: 0, C: 6 },
  Y: { shape: 2, A: 6, B: 3, C: 0 },
  Z: { shape: 3, A: 0, B: 6, C: 3 },
};

const totalScore: number = strategyGuide.reduce(
  (total: number, [opponentChoose, yourChoose]: string[]): number =>
    total + points[yourChoose].shape + points[yourChoose][opponentChoose],
  0
);

console.log(
  `According to the strategy guide your total score is: ${totalScore}`
); // Answer Part 1

// Part 2

const actualPoints: Record<string, Points> = {
  X: { result: 0, A: 3, B: 1, C: 2 },
  Y: { result: 3, A: 1, B: 2, C: 3 },
  Z: { result: 6, A: 2, B: 3, C: 1 },
};

const actualTotalScore: number = strategyGuide.reduce(
  (total: number, [opponentChoose, roundResult]: string[]): number =>
    total +
    actualPoints[roundResult].result +
    actualPoints[roundResult][opponentChoose],
  0
);

console.log(
  `According to the actual strategy guide your total score is: ${actualTotalScore}`
); // Answer Part 2
