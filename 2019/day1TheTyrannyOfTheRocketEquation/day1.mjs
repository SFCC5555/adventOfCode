// --- Day 1: The Tyranny of the Rocket Equation ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const modules = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map(Number);

const totalFuel = modules.reduce(
  (current, next) => current + Math.floor(next / 3) - 2,
  0
);

console.log(
  `The sum of the fuel requirements for all of the modules on the spacecraft is: ${totalFuel}`
); // Answer Part 1

//Part 2

const totalTotalFuel = modules
  .map((module) => {
    let fuel = Math.floor(module / 3) - 2;
    let mass = Math.floor(fuel / 3) - 2;

    while (mass > 0) {
      fuel += mass;
      mass = Math.floor(mass / 3) - 2;
    }

    return fuel;
  })
  .reduce((current, next) => current + next);

console.log(
  `The sum of the fuel requirements for all of the modules on the spacecraft when also taking into account the mass of the added fuel is: ${totalTotalFuel}`
); // Answer Part 2
