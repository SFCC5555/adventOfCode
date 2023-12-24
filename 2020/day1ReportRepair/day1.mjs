// --- Day 1: Report Repair ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const expenseReport = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map(Number);

for (let i = 0; i < expenseReport.length; i++) {
  const entrie = expenseReport[i];

  const secondEntrie = 2020 - entrie;

  const entriesSet = new Set([
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

// Part 2

outerLoop: for (let i = 0; i < expenseReport.length; i++) {
  const entrie = expenseReport[i];

  const entriesList = [
    ...expenseReport.slice(0, i),
    ...expenseReport.slice(i + 1),
  ];

  for (let j = 0; j < entriesList.length; j++) {
    const secondEntrie = entriesList[j];

    const thirdEntrie = 2020 - entrie - secondEntrie;

    const entriesSet = new Set([
      ...expenseReport.slice(0, j),
      ...expenseReport.slice(j + 1),
    ]);

    if (entriesSet.has(thirdEntrie)) {
      console.log(
        `The two entries that sum to 2020 are ${entrie}, ${secondEntrie} and ${thirdEntrie} and the product are ${
          entrie * secondEntrie * thirdEntrie
        }`
      ); // Answer Part 2
      break outerLoop;
    }
  }
}
