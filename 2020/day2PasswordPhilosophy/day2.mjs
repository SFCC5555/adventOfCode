// --- Day 2: Password Philosophy ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const passwordsDocument = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((passwordInfo) =>
    passwordInfo.replace(/-/, " ").replace(/:/, "").split(" ")
  );

let validPasswords = 0;

passwordsDocument.forEach(([lowest, highest, letter, password]) => {
  const reEx = new RegExp(letter, "g");
  const matches = password.match(reEx);
  const appearTimes = matches ? matches.length : 0;
  if (appearTimes >= parseInt(lowest) && appearTimes <= parseInt(highest)) {
    validPasswords += 1;
  }
});

console.log(`There are ${validPasswords} valid passwords`); // Answer Part 1

// Part 2

validPasswords = 0;

passwordsDocument.forEach(
  ([validPosition1Str, validPosition2Str, letter, password]) => {
    const validPosition1 = parseInt(validPosition1Str) - 1;
    const validPosition2 = parseInt(validPosition2Str) - 1;

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
