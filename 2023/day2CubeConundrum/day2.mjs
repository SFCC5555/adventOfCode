// --- Day 2: Cube Conundrum ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const recordInformation = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((game) => ({
    id: parseInt(game.split(":")[0].split(" ")[1]),
    rounds: game
      .split(": ")[1]
      .split("; ")
      .map((round) =>
        Object.fromEntries(
          round
            .split(", ")
            .map((color) => [
              color.split(" ")[1],
              parseInt(color.split(" ")[0]),
            ])
        )
      ),
  }));

const MAX_RED_CUBES = 12;
const MAX_GREEN_CUBES = 13;
const MAX_BLUE_CUBES = 14;

let sumPossibleGamesIds = recordInformation.reduce((total, game) => {
  let isPossible = true;

  for (const round of game.rounds) {
    if (
      round.red > MAX_RED_CUBES ||
      round.green > MAX_GREEN_CUBES ||
      round.blue > MAX_BLUE_CUBES
    ) {
      isPossible = false;
      break;
    }
  }

  return isPossible ? total + game.id : total;
}, 0);

console.log(`The sum of the IDs of those games is: ${sumPossibleGamesIds}`); // Answer Part 1

// Part 2

const powersSum = recordInformation.reduce(
  (total, game) =>
    total +
    Math.max(...game.rounds.map((round) => (round.red ? round.red : 0))) *
      Math.max(...game.rounds.map((round) => (round.green ? round.green : 0))) *
      Math.max(...game.rounds.map((round) => (round.blue ? round.blue : 0))),
  0
);

console.log(`The sum of the power of these sets is: ${powersSum}`); // Answer Part 2
