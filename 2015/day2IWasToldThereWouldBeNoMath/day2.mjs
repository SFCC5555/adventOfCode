// --- Day 2: I Was Told There Would Be No Math ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const presents = readFileSync(input, { encoding: "utf-8" }).split("\n");

let sumTotalAreas = presents
  .map((dimensions) => {
    const [l, w, h] = dimensions.split("x").map(Number);

    const area1 = l * w;
    const area2 = l * h;
    const area3 = w * h;

    const minArea = Math.min(area1, area2, area3);

    const totalArea = 2 * area1 + 2 * area2 + 2 * area3 + minArea;

    return totalArea;
  })
  .reduce((total, area) => total + area, 0);

console.log(
  `The total square feet of wrapping paper they should order is: ${sumTotalAreas}`
); // Answer Part 1
