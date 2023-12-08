# --- Day 1: Calorie Counting ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    lines = file.read().split("\n")

bag = {}
elf = 1

for calories in lines:
    if calories == "":
        elf += 1
    else:
        bag[f"calories_elf_{elf}"] = bag.get(f"calories_elf_{elf}", 0) + int(calories)

max_calories_elf = max(bag.values(), default=0)

top_3 = sorted(bag.values())[-3:]

top_3_calories = sum(top_3)

print(f"Calories of the max elf: {max_calories_elf}")  # Answer Part 1

print(f"Calories of the top 3 elfs: {top_3_calories}")  # Answer Part 2
