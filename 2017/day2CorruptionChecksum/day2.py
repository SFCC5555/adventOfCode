# --- Day 2: Corruption Checksum ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    spreadsheet = [row.split() for row in file.read().split("\n")]

checksum = sum([max(map(int, row)) - min(map(int, row)) for row in spreadsheet])

print(f"The checksum for the spreadsheet is: {checksum}")  # Answer part 1

# Part 2

second_checksum = 0

for row in spreadsheet:
    row = [int(number) for number in row]
    for index, a in enumerate(row):
        for b in row[index + 1 :]:
            if a % b == 0 or b % a == 0:
                divition = max(a,b) // min(a,b)
                second_checksum += divition
                break
        else:
            continue
        break
print(
    f"The checksum for the division of the evenly divisible values of the spreadsheet is: {second_checksum}"
)  # Answer part 2