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

//Part 2

// let iD1

// let iD2

// let iD

// let x

// data.map(s=>{

//     let status = 1

//     for (let string of data) {

//         let count=0

//         let count2=0

//         if (s===string) {

//         }

//         else if (status === 1) {

//             for (let l=0; l<string.length;l++) {

//                 if (s[l]===string[l]) {

//                     count++

//                 }

//                 else {
//                     count2++

//                     x = l

//                 }

//                 if (count2>1) {
//                     break
//                 }

//                 if (count===string.length-1 && count2===1) {

//                     iD1=s;

//                     iD2=string;

//                     iD=s.slice(0,x)+s.slice(x+1)

//                     status=0

//                     break

//                 }

//             }

//         }

//         else {

//             break
//         }

//     }
// });

// console.log(iD1);

// console.log(iD2);

// console.log(iD);
