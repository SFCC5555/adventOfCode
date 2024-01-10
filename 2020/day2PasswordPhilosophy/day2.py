# --- Day 2: Password Philosophy ---

import re

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    passwords_document = file.read().split("\n")

valid_passwords = 0

for password_info in passwords_document:
    password_info = re.sub(r"[-:]", " ", password_info).split()

    [lowest, highest, letter, password] = password_info

    appear_times = str.count(password, letter)

    if int(lowest) <= appear_times <= int(highest):
        valid_passwords += 1

print(f"There are {valid_passwords} valid passwords") # Answer Part 1
