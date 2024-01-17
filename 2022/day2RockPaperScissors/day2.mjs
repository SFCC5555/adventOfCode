// --- Day 2: Rock Paper Scissors ---

import { readFileSync } from "node:fs";

const input = "day2Input.txt";

const strategyGuide = readFileSync(input, { encoding: "utf-8" })
  .split("\n")
  .map((round) => round.split(" "));

const points = {
  X: { shape: 1, A: 3, B: 0, C: 6 },
  Y: { shape: 2, A: 6, B: 3, C: 0 },
  Z: { shape: 3, A: 0, B: 6, C: 3 },
};

const totalScore = strategyGuide.reduce(
  (total, [opponentChoose, yourChoose]) =>
    total + points[yourChoose].shape + points[yourChoose][opponentChoose],
  0
);

console.log(
  `According to the strategy guide your total score is: ${totalScore}`
); // Answer Part 1

//Part 2

// let ultimateScore=0

// for (let u of strategy) {
//     if (u[0]=="A") {
//         if (u[2]=="X") {
//             score=3
//             ultimateScore+=score
//         }
//         else if (u[2]=="Y") {
//             score=4
//             ultimateScore+=score
//         }
//         else if (u[2]=="Z") {
//             score=8
//             ultimateScore+=score
//         }
//     }

//     else if (u[0]=="B") {
//         if (u[2]=="X") {
//             score=1
//             ultimateScore+=score
//         }
//         else if (u[2]=="Y") {
//             score=5
//             ultimateScore+=score
//         }
//         else if (u[2]=="Z") {
//             score=9
//             ultimateScore+=score
//         }
//     }

//     else if (u[0]=="C") {
//         if (u[2]=="X") {
//             score=2
//             ultimateScore+=score
//         }
//         else if (u[2]=="Y") {
//             score=6
//             ultimateScore+=score
//         }
//         else if (u[2]=="Z") {
//             score=7
//             ultimateScore+=score
//         }
//     }
// }

// console.log(ultimateScore)
