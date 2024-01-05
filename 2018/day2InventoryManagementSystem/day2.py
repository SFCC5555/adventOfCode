# --- Day 2: Inventory Management System ---

input = "day2InputExample.txt"

with open(input, "r", encoding="utf-8") as file:
    likely_candidates = file.read().split("\n")

print(likely_candidates)

two_times = 0

three_times = 0

for candidate in likely_candidates:
    letters = {}
    for letter in candidate:
        if letter in letters:
            letters[letter] += 1
        else:
            letters[letter] = 1
    if 2 in letters.values():
        two_times += 1
    if 3 in letters.values():
        three_times += 1

checksum = two_times * three_times

print(
    f"The number of box IDs that contain a letter which appears exactly two times is: {two_times}"
)
print(
    f"The number of box IDs that contain a letter which appears exactly three times is: {three_times}"
)
print(f"The checksum of the list of box IDs is: {checksum}")  # Answer Part 1
