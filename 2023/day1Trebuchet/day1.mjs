// --- Day 1: Trebuchet?! ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

const lines = readFileSync(input, { encoding: "utf-8" });

const calibrationDocument = lines.split("\n");

const calibrationValues = calibrationDocument.map((line) => {
  const numbers = line.replace(/\D/g, "");

  const value = parseInt(numbers[0] + numbers[numbers.length - 1]);

  return value || 0;
});

const addCalibrationValues = calibrationValues.reduce((a, b) => a + b, 0);

console.log(
  `The sum of all of the calibration values is: ${addCalibrationValues}`
); // Answer Part 1

// Part 2

const letterDigits = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

const calibrationValuesPart2 = calibrationDocument.map((line) => {
  for (let digit in letterDigits) {
    const re = new RegExp(digit, "g");
    line = line.replace(re, letterDigits[digit]);
  }

  const numbers = line.replace(/\D/g, "");

  const value = parseInt(numbers[0] + numbers[numbers.length - 1]);

  return value || 0;
});

const addCalibrationValuesPart2 = calibrationValuesPart2.reduce(
  (a, b) => a + b,
  0
);

console.log(
  `The sum of all of the calibration values (Part 2) is: ${addCalibrationValuesPart2}`
); // Answer Part 2
