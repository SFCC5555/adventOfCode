# --- Day 1: Trebuchet?! ---

import re

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    lines = file.read()

calibration_document = lines.split("\n")

calibration_values = [
    int(re.sub(r"\D", "", line)[0] + re.sub(r"\D", "", line)[-1])
    for line in calibration_document
]

add_calibration_values = sum(calibration_values)

print(f"The sum of all the calibration values is: {add_calibration_values}")
# Answer Part 1
