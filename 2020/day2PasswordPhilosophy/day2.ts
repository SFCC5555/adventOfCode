// --- Day 2: Password Philosophy ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const passwordsDocument: string[][] = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((passwordInfo) =>
    passwordInfo.replace(/-/, " ").replace(/:/, "").split(" ")
  );

let validPasswords: number = 0;

passwordsDocument.forEach(
  ([lowest, highest, letter, password]: string[]): void => {
    const reEx: RegExp = new RegExp(letter, "g");
    const matches: RegExpMatchArray | null = password.match(reEx);
    const appearTimes: number = matches ? matches.length : 0;
    if (appearTimes >= parseInt(lowest) && appearTimes <= parseInt(highest)) {
      validPasswords += 1;
    }
  }
);

console.log(`There are ${validPasswords} valid passwords`); // Answer Part 1

// Part 2

validPasswords = 0;

passwordsDocument.forEach(
  ([validPosition1Str, validPosition2Str, letter, password]: string[]) => {
    const validPosition1: number = parseInt(validPosition1Str) - 1;
    const validPosition2: number = parseInt(validPosition2Str) - 1;

    if (
      (password[validPosition1] === letter) !==
      (password[validPosition2] === letter)
    ) {
      validPasswords += 1;
    }
  }
);

console.log(
  `According to the new interpretation of the policies are ${validPasswords} valid passwords`
); // Answer Part 2
