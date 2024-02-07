# --- Day 3: Perfectly Spherical Houses in a Vacuum ---

input = "day3Input.txt"

with open(input, "r", encoding="utf-8") as file:
    directions = file.read()

directions_mechanism = {
    "<": {"axis": "x", "value": -1},
    ">": {"axis": "x", "value": 1},
    "^": {"axis": "y", "value": 1},
    "v": {"axis": "y", "value": -1},
}

coordinates = {"x": 0, "y": 0}

houses_visited = {(0, 0): 1}

for direction in directions:
    axis = directions_mechanism[direction]["axis"]
    value = directions_mechanism[direction]["value"]
    coordinates[axis] += value

    new_position = (coordinates["x"], coordinates["y"])
    houses_visited[new_position] = houses_visited.get(new_position, 0) + 1

num_houses_with_presents = len(houses_visited)
print(
    f"The number of houses that receive at least one present is: {num_houses_with_presents}"
)  # Answer Part 1

# Part 2

coordinates_santa = {"x": 0, "y": 0}

coordinates_robo_santa = {"x": 0, "y": 0}

houses_visited = {(0, 0): 2}

for turn, direction in enumerate(directions, 1):

    axis = directions_mechanism[direction]["axis"]
    value = directions_mechanism[direction]["value"]

    if turn % 2 == 0:

        coordinates_robo_santa[axis] += value
        new_position = (coordinates_robo_santa["x"], coordinates_robo_santa["y"])

    else:
        coordinates_santa[axis] += value
        new_position = (coordinates_santa["x"], coordinates_santa["y"])

    houses_visited[new_position] = houses_visited.get(new_position, 0) + 1

num_houses_with_presents = len(houses_visited)
print(
    f"The number of houses that receive at least one present on the next year is: {num_houses_with_presents}"
)  # Answer Part 2
