# --- Day 1: Inverse Captcha ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    lines = file.read()

lines += lines[0]
sum = 0

for i in range(0, len(lines) - 1):
    if lines[i] == lines[i + 1]:
        sum += int(lines[i])

print(f"The solution of the captcha is: {sum}")  # Answer Part 1
