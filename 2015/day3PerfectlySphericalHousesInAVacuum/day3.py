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

    current_position = (coordinates["x"], coordinates["y"])
    houses_visited[current_position] = houses_visited.get(current_position, 0) + 1

num_houses_with_presents = len(houses_visited)
print(
    f"The number of houses that receive at least one present is: {num_houses_with_presents}"
) # Answer Part 1
