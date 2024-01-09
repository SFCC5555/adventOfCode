# --- Day 2: 1202 Program Alarm ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    code = [int(number) for number in file.read().split(",")]

OPCODE_ADD = 1
OPCODE_MULTIPLY = 2
OPCODE_HALT = 99


def program(intcode, noun, verb):
    intcode[1] = noun
    intcode[2] = verb

    for index in range(0, len(intcode), 4):
        opcode = intcode[index]
        if opcode == OPCODE_HALT:
            return intcode[0]
        if opcode != OPCODE_ADD and opcode != OPCODE_MULTIPLY:
            print(f"Something went wrong, unknow opcode: {opcode}")
            break

        try:
            position_1 = intcode[index + 1]
            position_2 = intcode[index + 2]
            position_3 = intcode[index + 3]

            number_1 = intcode[position_1]
            number_2 = intcode[position_2]

            intcode[position_3] = (
                number_1 + number_2 if opcode == 1 else number_1 * number_2
            )

        except IndexError:
            print("Something went wrong, indexError")
            break


program_alarm_1202 = program(list(code), 12, 2)


print(
    f"The value left at position 0 after the program halts is : {program_alarm_1202}"
)  # Answer Part 1

# Part 2

OUTPUT_EXPECTED = 19690720

for noun in range(100):
    for verb in range(100):
        output = program(list(code), noun, verb)
        if output == OUTPUT_EXPECTED:
            print(
                f"The inpunts that cause the program to produce the output {OUTPUT_EXPECTED} are: Noun: {noun}, Verb: {verb} and the product of 100 * noun + verb is: {(100*noun)+verb}"
            )  # Answer Part 2
            break
    else:
        continue
    break
