// --- Day 2: I Was Told There Would Be No Math ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const presents: string[] = readFileSync(input, { encoding: "utf-8" }).split(
  "\n"
);

let sumTotalAreas: number = presents
  .map((dimensions: string): number => {
    const [l, w, h]: number[] = dimensions.split("x").map(Number);

    const area1: number = l * w;
    const area2: number = l * h;
    const area3: number = w * h;

    const minArea: number = Math.min(area1, area2, area3);

    const totalArea: number = 2 * area1 + 2 * area2 + 2 * area3 + minArea;

    return totalArea;
  })
  .reduce((total: number, area: number): number => total + area, 0);

console.log(
  `The total square feet of wrapping paper they should order is: ${sumTotalAreas}`
); // Answer Part 1
