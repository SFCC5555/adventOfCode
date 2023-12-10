// --- Day 1: Trebuchet?! ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const lines = readFileSync(input, { encoding: "utf-8" });

const calibrationDocument = lines.split("\n");

const calibrationValues = calibrationDocument.map((line) => {
  const numbers = line.replace(/\D/g, "");

  const value = parseInt(numbers[0] + numbers[numbers.length - 1]);

  return value;
});

const addCalibrationValues = calibrationValues.reduce((a, b) => a + b, 0);

console.log(
  `The sum of all of the calibration values is: ${addCalibrationValues}`
); // Answer Part 1
