# --- Day 1: Chronal Calibration ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    sequence_of_changes = [int(change) for change in file.read().split("\n")]

frequency = sum(sequence_of_changes)

print(f"The frequency after all of the changes is: {frequency}")  # Answer Part 1

# Part 2

frequency = 0

frequency_record = set()

while frequency not in frequency_record:
    for change in sequence_of_changes:
        frequency_record.add(frequency)
        frequency += change
        if frequency in frequency_record:
            break

print(f"The first frequency that the device reaches twice is: {frequency}")
# Answer Part 2
