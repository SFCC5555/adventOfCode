// --- Day 2: Password Philosophy ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const passwordsDocument: string[] = readFileSync(input, {
  encoding: "utf-8",
}).split("\n");

let validPasswords: number = 0;

passwordsDocument.forEach((passwordInfo: string): void => {
  const passwordInfoList: string[] = passwordInfo
    .replace(/-/, " ")
    .replace(/:/, "")
    .split(" ");
  const [lowest, highest, letter, password]: string[] = passwordInfoList;
  const reEx: RegExp = new RegExp(letter, "g");
  const matches: RegExpMatchArray | null = password.match(reEx);
  const appearTimes: number = matches ? matches.length : 0;
  if (appearTimes >= parseInt(lowest) && appearTimes <= parseInt(highest)) {
    validPasswords += 1;
  }
});

console.log(`There are ${validPasswords} valid passwords`); // Answer Part 1
