// --- Day 1: Sonar Sweep ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const report: number[] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map(Number);

let largerMeasurements: number = 0;

for (let i = 1; i < report.length; i++) {
  if (report[i] > report[i - 1]) {
    largerMeasurements++;
  }
}

console.log(
  `The number of measurements that are larger than the previous measurement is: ${largerMeasurements}`
); // Answer Part 1

// Part 2

const threeMeasurementList: number[] = report
  .map((m: number, i: number): number => {
    return i < report.length - 2 ? m + report[i + 1] + report[i + 2] : 0;
  })
  .slice(0, -2);

let largerSumMeasurements: number = 0;

for (let i: number = 1; i < threeMeasurementList.length; i++) {
  if (threeMeasurementList[i] > threeMeasurementList[i - 1]) {
    largerSumMeasurements++;
  }
}

console.log(
  `The number of sum measurements that are larger than the previous sum measurement is: ${largerSumMeasurements}`
); // Answer Part 2
