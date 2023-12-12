# --- Day 1: Trebuchet?! ---

import re

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    lines = file.read()

calibration_document = lines.split("\n")

calibration_values = [
    int(numbers[0] + numbers[-1])
    for line in calibration_document
    if (numbers := re.sub(r"\D", "", line))
]

add_calibration_values = sum(calibration_values)

print(f"The sum of all the calibration values is: {add_calibration_values}")
# Answer Part 1

# Part 2

letter_digits = {
    "one": "one1one",
    "two": "two2two",
    "three": "three3three",
    "four": "four4four",
    "five": "five5five",
    "six": "six6six",
    "seven": "seven7seven",
    "eight": "eight8eight",
    "nine": "nine9nine",
}

calibration_values_part_2 = []

for line in calibration_document:
    for digit, digit_value in letter_digits.items():
        line = re.sub(digit, digit_value, line)

    numbers = re.sub(r"\D", "", line)
    
    value = int(numbers[0] + numbers[-1]) if numbers else 0

    calibration_values_part_2.append(value)

add_calibration_values_part_2 = sum(calibration_values_part_2)

print(
    f"The sum of all the calibration values (Part 2) is: {add_calibration_values_part_2}"
)
