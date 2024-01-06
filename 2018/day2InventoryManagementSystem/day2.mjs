// --- Day 2: Inventory Management System ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const likely_candidates = readFileSync(input, { encoding: "utf-8" }).split(
  "\n"
);

let twoTimes = 0;

let threeTimes = 0;

likely_candidates.forEach((candidate) => {
  const letters = {};
  for (let letter of candidate) {
    letters[letter] = letter in letters ? letters[letter] + 1 : 1;
  }

  twoTimes += new Set(Object.values(letters)).has(2) ? 1 : 0;

  threeTimes += new Set(Object.values(letters)).has(3) ? 1 : 0;
});

const checksum = twoTimes * threeTimes;

console.log(
  `The number of box IDs that contain a letter which appears exactly two times is: ${twoTimes}`
);
console.log(
  `The number of box IDs that contain a letter which appears exactly three times is: ${threeTimes}`
);
console.log(`The checksum of the list of box IDs is: ${checksum}`); // Answer Part 1

// Part 2

mainLoop: for (let index = 0; index < likely_candidates.length; index++) {
  const candidate_a = likely_candidates[index];
  for (let candidate_b of likely_candidates.slice(index + 1)) {
    let char_differ_counter = 0;
    let char_differ_index = 0;
    for (let char_index = 0; char_index < candidate_a.length; char_index++) {
      if (candidate_a[char_index] != candidate_b[char_index]) {
        char_differ_counter += 1;
        char_differ_index = char_index;
      }

      if (char_differ_counter > 1) {
        break;
      }
    }

    if (char_differ_counter === 1) {
      const common_letters =
        candidate_a.slice(0, char_differ_index) +
        candidate_a.slice(char_differ_index + 1);
      console.log(
        `The common letters between the two correct box IDs are: ${common_letters}`
      ); // Answer Part 2
      break mainLoop;
    }
  }
}
