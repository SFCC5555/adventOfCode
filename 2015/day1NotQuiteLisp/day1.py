# --- Day 1: Not Quite Lisp ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    instructions = file.read()

floor = 0

for instrunction in instructions:
    floor += 1 if instrunction == "(" else -1

print(f"The instructions take Santa to the floor: {floor}")  # Answer Part 1

# Part 2

floor = 0

position_to_enter_the_basement = None


for index, instrunction in enumerate(instructions, 1):
    floor += 1 if instrunction == "(" else -1
    if floor == -1:
        position_to_enter_the_basement = index
        break

print(
    f"The position of the instruction to enter the basement is: {position_to_enter_the_basement}"
)  # Answer Part 2
