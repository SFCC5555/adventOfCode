// --- Day 1: Trebuchet?! ---

import { readFileSync } from "node:fs";

const input: string = "day1Input.txt";

const lines: string = readFileSync(input, { encoding: "utf-8" });

const calibrationDocument: string[] = lines.split("\n");

const calibrationValues: number[] = calibrationDocument.map(
  (line: string): number => {
    const numbers: string = line.replace(/\D/g, "");

    const value: number = parseInt(numbers[0] + numbers[numbers.length - 1], 0);

    return value || 0;
  }
);

const addCalibrationValues: number = calibrationValues.reduce(
  (a: number, b: number) => a + b,
  0
);

console.log(
  `The sum of all of the calibration values is: ${addCalibrationValues}`
); // Answer Part 1

// Part 2

const letterDigits: Record<string, string> = {
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

const calibrationValuesPart2: number[] = calibrationDocument.map(
  (line: string): number => {
    for (let digit in letterDigits) {
      const re: RegExp = new RegExp(digit, "g");
      line = line.replace(re, letterDigits[digit]);
    }

    const numbers: string = line.replace(/\D/g, "");

    const value: number = parseInt(numbers[0] + numbers[numbers.length - 1]);

    return value || 0;
  }
);

const addCalibrationValuesPart2: number = calibrationValuesPart2.reduce(
  (a: number, b: number) => a + b,
  0
);

console.log(
  `The sum of all of the calibration values (Part 2) is: ${addCalibrationValuesPart2}`
); // Answer Part 2
