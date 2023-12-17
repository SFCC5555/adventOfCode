// --- Day 1: Inverse Captcha ---

import { readFileSync } from "node:fs";

const input = "day1Input.txt";

let lines = readFileSync(input, { encoding: "utf-8" });

const captchaSolver = (steps) => {
  const sequence = lines + lines.slice(0, steps);
  let sum = 0;
  for (let i = 0; i < sequence.length - steps; i++) {
    if (sequence[i] === sequence[i + steps]) {
      sum += parseInt(sequence[i]);
    }
  }

  console.log(`The solution of the captcha is: ${sum}`);
};

captchaSolver(1); // Answer Part 1

// Part 2

const half = Math.floor(lines.length / 2);

captchaSolver(half); // Answer Part 2
