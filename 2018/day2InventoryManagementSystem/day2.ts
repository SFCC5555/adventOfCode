// --- Day 2: Inventory Management System ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const likely_candidates: string[] = readFileSync(input, {
  encoding: "utf-8",
}).split("\n");

let twoTimes: number = 0;

let threeTimes: number = 0;

likely_candidates.forEach((candidate: string): void => {
  const letters: Record<string, number> = {};
  for (let letter of candidate) {
    letters[letter] = letter in letters ? letters[letter] + 1 : 1;
  }

  twoTimes += new Set(Object.values(letters)).has(2) ? 1 : 0;

  threeTimes += new Set(Object.values(letters)).has(3) ? 1 : 0;
});

const checksum: number = twoTimes * threeTimes;

console.log(
  `The number of box IDs that contain a letter which appears exactly two times is: ${twoTimes}`
);
console.log(
  `The number of box IDs that contain a letter which appears exactly three times is: ${threeTimes}`
);
console.log(`The checksum of the list of box IDs is: ${checksum}`); // Answer Part 1

// Part 2

mainLoop: for (
  let index: number = 0;
  index < likely_candidates.length;
  index++
) {
  const candidate_a: string = likely_candidates[index];
  for (let candidate_b of likely_candidates.slice(index + 1)) {
    let char_differ_counter: number = 0;
    let char_differ_index: number = 0;
    for (
      let char_index: number = 0;
      char_index < candidate_a.length;
      char_index++
    ) {
      if (candidate_a[char_index] != candidate_b[char_index]) {
        char_differ_counter += 1;
        char_differ_index = char_index;
      }

      if (char_differ_counter > 1) {
        break;
      }
    }

    if (char_differ_counter === 1) {
      const common_letters: string =
        candidate_a.slice(0, char_differ_index) +
        candidate_a.slice(char_differ_index + 1);
      console.log(
        `The common letters between the two correct box IDs are: ${common_letters}`
      ); // Answer Part 2
      break mainLoop;
    }
  }
}
