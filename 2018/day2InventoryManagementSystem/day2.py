# --- Day 2: Inventory Management System ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    likely_candidates = file.read().split("\n")

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

# Part 2

for index, candidate_a in enumerate(likely_candidates):
    for candidate_b in likely_candidates[index + 1 :]:
        char_differ_counter = 0
        char_differ_index = None
        for char_index in range(len(candidate_a) - 1):
            if candidate_a[char_index] != candidate_b[char_index]:
                char_differ_counter += 1
                char_differ_index = char_index
            if char_differ_counter > 1:
                break
        if char_differ_counter == 1:
            common_letters = (
                candidate_a[:char_differ_index] + candidate_a[char_differ_index + 1 :]
            )
            print(
                f"The common letters between the two correct box IDs are: {common_letters}"
            )  # Answer Part 2
            break
    else:
        continue
    break
