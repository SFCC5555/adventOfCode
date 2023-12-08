// --- Day 1: Calorie Counting ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const lines = readFileSync(input, { encoding: "utf-8" });

const inventory = lines.split("\n");

const bag = {};

let elf = 1;

for (const calories of inventory) {
  if (calories === "") {
    elf += 1;
  } else {
    bag[`caloriesElf${elf}`] =
      (bag[`caloriesElf${elf}`] || 0) + parseInt(calories);
  }
}

const maxCaloriesElf = Math.max(...Object.values(bag));

const top3 = Object.values(bag)
  .sort((a, b) => a - b)
  .slice(-3);

const top3Calories = top3.reduce((a, b) => a + b);

console.log(`Calories of the max elf: ${maxCaloriesElf}`); // Answer Part 1

console.log(`Calories of the top 3 elfs: ${top3Calories}`); // Answer Part 2
