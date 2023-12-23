// --- Day 1: Report Repair ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const expenseReport: number[] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map(Number);

for (let i = 0; i < expenseReport.length; i++) {
  const entrie: number = expenseReport[i];

  const secondEntrie: number = 2020 - entrie;

  const entriesSet: Set<number> = new Set([
    ...expenseReport.slice(0, i),
    ...expenseReport.slice(i + 1),
  ]);

  if (entriesSet.has(secondEntrie)) {
    console.log(
      `The two entries that sum to 2020 are ${entrie} and ${secondEntrie} and the product are ${
        entrie * secondEntrie
      }`
    ); // Answer Part 1
    break;
  }
}
