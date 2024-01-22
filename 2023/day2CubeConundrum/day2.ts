// --- Day 2: Cube Conundrum ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

interface Game {
  id: number;
  rounds: Round[];
}

interface Round {
  [key: string]: number;
}

const recordInformation: Game[] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map(
    (game: string): Game => ({
      id: parseInt(game.split(":")[0].split(" ")[1]),
      rounds: game
        .split(": ")[1]
        .split("; ")
        .map(
          (round: string): Round =>
            Object.fromEntries(
              round
                .split(", ")
                .map((color: string): [string, number] => [
                  color.split(" ")[1],
                  parseInt(color.split(" ")[0]),
                ])
            )
        ),
    })
  );

const MAX_RED_CUBES: number = 12;
const MAX_GREEN_CUBES: number = 13;
const MAX_BLUE_CUBES: number = 14;

let sumPossibleGamesIds: number = recordInformation.reduce(
  (total: number, game: Game): number => {
    let isPossible: boolean = true;

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
  },
  0
);

console.log(`The sum of the IDs of those games is: ${sumPossibleGamesIds}`); // Answer Part 1
