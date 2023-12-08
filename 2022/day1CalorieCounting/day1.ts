// --- Day 1: Calorie Counting ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const lines: string = readFileSync(input, { encoding: "utf-8" });

const inventory: string[] = lines.split("\n");

const bag: Record<string, number> = {};

let elf: number = 1;

for (const calories of inventory) {
  if (calories === "") {
    elf += 1;
  } else {
    bag[`caloriesElf${elf}`] =
      (bag[`caloriesElf${elf}`] || 0) + parseInt(calories, 10);
  }
}

const maxCaloriesElf: number = Math.max(...Object.values(bag));

const top3: number[] = Object.values(bag)
  .sort((a, b) => a - b)
  .slice(-3);

const top3Calories: number = top3.reduce((a, b) => a + b);

console.log(`Calories of the max elf: ${maxCaloriesElf}`); // Answer Part 1

console.log(`Calories of the top 3 elfs: ${top3Calories}`); // Answer Part 2
