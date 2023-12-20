// --- Day 1: The Tyranny of the Rocket Equation ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const modules: number[] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map(Number);

const totalFuel: number = modules.reduce(
  (current: number, next: number): number => current + Math.floor(next / 3) - 2,
  0
);

console.log(
  `The sum of the fuel requirements for all of the modules on the spacecraft is: ${totalFuel}`
); // Answer Part 1

//Part 2

const totalTotalFuel: number = modules
  .map((module: number): number => {
    let fuel: number = Math.floor(module / 3) - 2;
    let mass: number = Math.floor(fuel / 3) - 2;

    while (mass > 0) {
      fuel += mass;
      mass = Math.floor(mass / 3) - 2;
    }

    return fuel;
  })
  .reduce((current: number, next: number): number => current + next);

console.log(
  `The sum of the fuel requirements for all of the modules on the spacecraft when also taking into account the mass of the added fuel is: ${totalTotalFuel}`
); // Answer Part 2
