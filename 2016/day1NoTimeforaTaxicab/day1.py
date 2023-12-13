# --- Day 1: No Time for a Taxicab ---


input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    instructions = file.read().split(", ")

coordinates = {"x": 0, "y": 0}

face_direction = "N"

mechanism = {
    "N": {
        "axis": "x",
        "R": {"newDirection": "E", "value": 1},
        "L": {"newDirection": "W", "value": -1},
    },
    "S": {
        "axis": "x",
        "R": {"newDirection": "W", "value": -1},
        "L": {"newDirection": "E", "value": 1},
    },
    "E": {
        "axis": "y",
        "R": {"newDirection": "S", "value": -1},
        "L": {"newDirection": "N", "value": 1},
    },
    "W": {
        "axis": "y",
        "R": {"newDirection": "N", "value": 1},
        "L": {"newDirection": "S", "value": -1},
    },
}

for instruction in instructions:
    sense, steps = instruction[0], int(instruction[1:])

    if sense in ["R", "L"]:
        coordinates[mechanism[face_direction]["axis"]] += (
            steps * mechanism[face_direction][sense]["value"]
        )
        face_direction = mechanism[face_direction][sense]["newDirection"]

blocks_away = abs(coordinates["x"]) + abs(coordinates["y"])

print(
    f"The coordinates of the destination are ( x: {coordinates['x']}, y: {coordinates['y']}) and they are {blocks_away} blocks away."
)  # Answer Part 1
