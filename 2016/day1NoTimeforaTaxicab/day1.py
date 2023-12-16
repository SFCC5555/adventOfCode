# --- Day 1: No Time for a Taxicab ---


input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    instructions = file.read().split(", ")

coordinates = {"x": 0, "y": 0}

locations = {"0-0": True}  # Part 2

locations_revisited = []  # Part 2

face_direction = "N"

mechanism = {
    "N": {
        "axis": "x",
        "R": {"new_direction": "E", "value": 1},
        "L": {"new_direction": "W", "value": -1},
    },
    "S": {
        "axis": "x",
        "R": {"new_direction": "W", "value": -1},
        "L": {"new_direction": "E", "value": 1},
    },
    "E": {
        "axis": "y",
        "R": {"new_direction": "S", "value": -1},
        "L": {"new_direction": "N", "value": 1},
    },
    "W": {
        "axis": "y",
        "R": {"new_direction": "N", "value": 1},
        "L": {"new_direction": "S", "value": -1},
    },
}

for instruction in instructions:
    sense, steps = instruction[0], int(instruction[1:])

    if sense in ["R", "L"]:
        new_direction = mechanism[face_direction][sense]["new_direction"]
        value = mechanism[face_direction][sense]["value"]
        axis = mechanism[face_direction]["axis"]

    # Part 2

    for step in range(1, steps + 1):
        location = (
            f"{coordinates['x'] + step * value}-{coordinates['y']}"
            if axis == "x"
            else f"{coordinates['x']}-{coordinates['y'] + step * value}"
        )

        if location in locations:
            locations_revisited.append(
                {
                    "x": coordinates["x"] + step * value,
                    "y": coordinates["y"],
                }
            ) if axis == "x" else locations_revisited.append(
                {
                    "x": coordinates["x"],
                    "y": coordinates["y"] + step * value,
                }
            )
        else:
            locations[location] = True

    # Part 1
    coordinates[axis] += steps * value
    face_direction = new_direction

# Part 1

blocks_away = abs(coordinates["x"]) + abs(coordinates["y"])

print(
    f"The coordinates of the destination are ( x: {coordinates['x']}, y: {coordinates['y']}) and they are {blocks_away} blocks away."
)  # Answer Part 1


# Part 2

first_location_revisited = (
    locations_revisited[0]
    if locations_revisited
    else {
        "x": None,
        "y": None,
    }
)

blocks_away_part_2 = (
    abs(first_location_revisited["x"]) + abs(first_location_revisited["y"])
    if first_location_revisited["x"] != None
    else None
)

print(
    f"The coordinates of the destination (first location revisited) are ( x: {first_location_revisited['x']}, y: {first_location_revisited['y']}) and they are {blocks_away_part_2} blocks away."
)  # Answer Part 2
