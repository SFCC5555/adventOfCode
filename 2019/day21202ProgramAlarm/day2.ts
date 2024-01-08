// --- Day 2: 1202 Program Alarm ---

import { error } from "node:console";
import { readFileSync } from "node:fs";

const input: string = "day2Input.txt";

const intcode: number[] = readFileSync(input, { encoding: "utf-8" })
  .split(",")
  .map(Number);

intcode[1] = 12;
intcode[2] = 2;

const OPCODE_ADD: number = 1;
const OPCODE_MULTIPLY: number = 2;
const OPCODE_HALT: number = 99;

for (let index: number = 0; index < intcode.length; index += 4) {
  const opcode: number = intcode[index];
  if (opcode === OPCODE_HALT) {
    console.log(
      `The value left at position 0 after the program halts is : ${intcode[0]}`
    ); // Answer part 1
    break;
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
