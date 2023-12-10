// --- Day 1: Trebuchet?! ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const lines: string = readFileSync(input, { encoding: "utf-8" });

const calibrationDocument: string[] = lines.split("\n");

const calibrationValues: number[] = calibrationDocument.map(
  (line: string): number => {
    const numbers: string = line.replace(/\D/g, "");

    const value: number = parseInt(numbers[0] + numbers[numbers.length - 1]);

    return value;
  }
);

const addCalibrationValues: number = calibrationValues.reduce(
  (a: number, b: number) => a + b,
  0
);

console.log(
  `The sum of all of the calibration values is: ${addCalibrationValues}`
); // Answer Part 1
