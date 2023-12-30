// --- Day 2: I Was Told There Would Be No Math ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const presents = readFileSync(input, { encoding: "utf-8" }).split("\n");

const sumTotalAreas = presents.reduce((total, dimensions) => {
  const [l, w, h] = dimensions.split("x").map(Number);

  const area1 = l * w;
  const area2 = l * h;
  const area3 = w * h;

  const minArea = Math.min(area1, area2, area3);

  const totalArea = 2 * area1 + 2 * area2 + 2 * area3 + minArea;

  return total + totalArea;
}, 0);

console.log(
  `The total square feet of wrapping paper they should order is: ${sumTotalAreas}`
); // Answer Part 1

// Part 2

const sumTotalRibbon = presents.reduce((total, dimensions) => {
  const [l, w, h] = dimensions
    .split("x")
    .map(Number)
    .sort((a, b) => a - b);
  const presentRibbon = 2 * l + 2 * w;
  const bowRibbon = l * w * h;
  const totalRibbon = presentRibbon + bowRibbon;
  return total + totalRibbon;
}, 0);

console.log(`The total feet of ribbon they should order is: ${sumTotalRibbon}`); // Answer Part 2
