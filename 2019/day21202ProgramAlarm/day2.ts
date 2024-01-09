// --- Day 2: 1202 Program Alarm ---

import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const code: number[] = readFileSync(input, { encoding: "utf-8" })
  .split(",")
  .map(Number);

const OPCODE_ADD: number = 1;
const OPCODE_MULTIPLY: number = 2;
const OPCODE_HALT: number = 99;

const program = (
  intcode: number[],
  noun: number,
  verb: number
): number | undefined => {
  intcode[1] = noun;
  intcode[2] = verb;

  for (let index: number = 0; index < intcode.length; index += 4) {
    const opcode: number = intcode[index];
    if (opcode === OPCODE_HALT) {
      return intcode[0];
    }

    if (opcode != OPCODE_ADD && opcode != OPCODE_MULTIPLY) {
      console.log(`Something went wrong, unknow opcode: ${opcode}`);
      break;
    }

    try {
      const position1: number = intcode[index + 1];
      const position2: number = intcode[index + 2];
      const position3: number = intcode[index + 3];

      if (
        position1 > intcode.length - 1 ||
        position2 > intcode.length - 1 ||
        position3 > intcode.length - 1
      ) {
        throw new Error("indexError");
      }
      const number1: number = intcode[position1];
      const number2: number = intcode[position2];

      intcode[position3] = opcode === 1 ? number1 + number2 : number1 * number2;
    } catch (error: any) {
      console.log("Something went wrong,", error.message);
      break;
    }
  }
};

const programAlarm1202: number | undefined = program([...code], 12, 2);

console.log(
  `The value left at position 0 after the program halts is : ${programAlarm1202}`
); // Answer part 1

// Part 2

const OUTPUT_EXPECTED: number = 19690720;

mainLoop: for (let noun: number = 0; noun <= 99; noun++) {
  for (let verb: number = 0; verb <= 99; verb++) {
    const output: number | undefined = program([...code], noun, verb);
    if (output === OUTPUT_EXPECTED) {
      console.log(
        `The inpunts that cause the program to produce the output ${OUTPUT_EXPECTED} are: Noun: ${noun}, Verb: ${verb} and the product of 100 * noun + verb is: ${
          100 * noun + verb
        }`
      ); // Answer Part 2
      break mainLoop;
    }
  }
}
