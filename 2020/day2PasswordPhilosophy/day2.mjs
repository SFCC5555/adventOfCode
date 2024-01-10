// --- Day 2: Password Philosophy ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const passwordsDocument = readFileSync(input, { encoding: "utf-8" }).split(
  "\n"
);

let validPasswords = 0;

passwordsDocument.forEach((passwordInfo) => {
  const passwordInfoList = passwordInfo.replace(/-/, " ").replace(/:/, "").split(" ");
  const [lowest, highest, letter, password] = passwordInfoList;
  const reEx = new RegExp(letter, "g");
  const matches = password.match(reEx);
  const appearTimes = matches ? matches.length : 0;
  if (appearTimes >= parseInt(lowest) && appearTimes <= parseInt(highest)) {
    validPasswords += 1;
  }
});

console.log(`There are ${validPasswords} valid passwords`); // Answer Part 1
