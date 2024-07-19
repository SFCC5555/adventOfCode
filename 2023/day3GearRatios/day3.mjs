// --- Day 3: Gear Ratios ---

import { readFileSync } from "node:fs";

const input = "day3InputExample.txt";

const engineSchematic = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((line) => line.split(""));

//console.log(engineSchematic);

const newEngineSchematic = [];

for (let i of engineSchematic) {
  for (let j = 0; j < i.length; j++) {
    let newItem;
    console.log(i[j])
  }
}
