# --- Day 2: Password Philosophy ---

import re

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    passwords_document = [
        re.sub(r"[-:]", " ", password_info).split()
        for password_info in file.read().split("\n")
    ]

valid_passwords = 0

for lowest, highest, letter, password in passwords_document:
    appear_times = str.count(password, letter)
    if int(lowest) <= appear_times <= int(highest):
        valid_passwords += 1

print(f"There are {valid_passwords} valid passwords")  # Answer Part 1

# Part 2

valid_passwords = 0

for valid_position_1, valid_position_2, letter, password in passwords_document:
    valid_position_1, valid_position_2 = (
        int(valid_position_1) - 1,
        int(valid_position_2) - 1,
    )

    if (password[valid_position_1] == letter) != (password[valid_position_2] == letter):
        valid_passwords += 1

print(
    f"According to the new interpretation of the policies are {valid_passwords} valid passwords"
)  # Answer Part 2
