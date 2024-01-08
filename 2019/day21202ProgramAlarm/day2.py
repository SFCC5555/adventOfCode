# --- Day 2: 1202 Program Alarm ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    intcode = [int(number) for number in file.read().split(",")]

intcode[1] = 12
intcode[2] = 2

OPCODE_ADD = 1
OPCODE_MULTIPLY = 2
OPCODE_HALT = 99

for index in range(0, len(intcode), 4):
    opcode = intcode[index]
    if opcode == OPCODE_HALT:
        print(
            f"The value left at position 0 after the program halts is : {intcode[0]}"
        )  # Answer Part 1
        break
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
