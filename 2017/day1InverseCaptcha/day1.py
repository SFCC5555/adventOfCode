# --- Day 1: Inverse Captcha ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    lines = file.read()


def captchaSolver(steps):
    sequence = lines + lines[:steps]

    sum = 0

    for i in range(len(sequence) - steps):
        if sequence[i] == sequence[i + steps]:
            sum += int(sequence[i])

    print(f"The solution of the captcha is: {sum}")


captchaSolver(1)  # Answer Part 1

# Part 2

half = len(lines) // 2

captchaSolver(half)  # Answer Part 2
