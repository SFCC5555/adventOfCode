# --- Day 2: Bathroom Security ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    instructions = file.read().split("\n")

position = {"x": 1, "y": 1}

limits = {"x": 2, "y": 2}

code = ""

buttons = {
    "1": {"x": 0, "y": 2},
    "2": {"x": 1, "y": 2},
    "3": {"x": 2, "y": 2},
    "4": {"x": 0, "y": 1},
    "5": {"x": 1, "y": 1},
    "6": {"x": 2, "y": 1},
    "7": {"x": 0, "y": 0},
    "8": {"x": 1, "y": 0},
    "9": {"x": 2, "y": 0},
}

keypad_moves = {
    "U": {"x": 0, "y": 1},
    "D": {"x": 0, "y": -1},
    "R": {"x": 1, "y": 0},
    "L": {"x": -1, "y": 0},
}

for instruction in instructions:
    for move in instruction:
        new_x_position = position["x"] + keypad_moves[move]["x"]
        new_y_position = position["y"] + keypad_moves[move]["y"]
        position["x"] = (
            new_x_position
            if new_x_position <= limits["x"] and new_x_position >= 0
            else position["x"]
        )
        position["y"] = (
            new_y_position
            if new_y_position <= limits["y"] and new_y_position >= 0
            else position["y"]
        )
    for button, button_position in buttons.items():
        if button_position == position:
            code += button
            break

print(f"The bathroom code is: {code}")  # Answer Part 1

# Part 2

position = {"x": 0, "y": 2}

code = ""

buttons = {
    "1": {"x": 2, "y": 4},
    "2": {"x": 1, "y": 3},
    "3": {"x": 2, "y": 3},
    "4": {"x": 3, "y": 3},
    "5": {"x": 0, "y": 2},
    "6": {"x": 1, "y": 2},
    "7": {"x": 2, "y": 2},
    "8": {"x": 3, "y": 2},
    "9": {"x": 4, "y": 2},
    "A": {"x": 1, "y": 1},
    "B": {"x": 2, "y": 1},
    "C": {"x": 3, "y": 1},
    "D": {"x": 2, "y": 0},
}

for instruction in instructions:
    for move in instruction:
        new_x_position = position["x"] + keypad_moves[move]["x"]
        new_y_position = position["y"] + keypad_moves[move]["y"]
        new_position = {"x": new_x_position, "y": new_y_position}

        for button, button_position in buttons.items():
            if button_position == new_position:
                position = new_position
                break

    for button, button_position in buttons.items():
        if button_position == position:
            code += button
            break

print(f"The correct bathroom code is: {code}")  # Answer Part 2
