input = 265149

coordinates = {"x": 0, "y": 0}

grid = {1: {"x": 0, "y": 0}}

change_interval = 1

axis = "x"

direction = 1

change_axis_counter = 0

change_direction_counter = 0

for square in range(2, input + 1):
    coordinates[axis] += direction
    change_axis_counter += 1
    grid[square] = {"x": coordinates["x"], "y": coordinates["y"]}

    if change_axis_counter == change_interval:
        change_direction_counter += 1
        axis = "x" if axis == "y" else "y"
        change_axis_counter = 0

    if change_direction_counter == 2:
        direction *= -1
        change_interval += 1
        change_direction_counter = 0

steps = abs(grid[input]["x"]) + abs(grid[input]["y"])

print(f"The steps required are: {steps}")  # Answer Part 1

# Part 2

coordinates = {"x": 0, "y": 0}

new_grid = {(0, 0): 1}

change_interval = 1

axis = "x"

direction = 1

change_axis_counter = 0

change_direction_counter = 0

value = 0

while value < input:

    coordinates[axis] += direction

    change_axis_counter += 1

    adjacent_number_1 = new_grid.get((coordinates["x"] - 1, coordinates["y"] + 1), 0)
    adjacent_number_2 = new_grid.get((coordinates["x"], coordinates["y"] + 1), 0)
    adjacent_number_3 = new_grid.get((coordinates["x"] + 1, coordinates["y"] + 1), 0)
    adjacent_number_4 = new_grid.get((coordinates["x"] + 1, coordinates["y"]), 0)
    adjacent_number_5 = new_grid.get((coordinates["x"] + 1, coordinates["y"] - 1), 0)
    adjacent_number_6 = new_grid.get((coordinates["x"], coordinates["y"] - 1), 0)
    adjacent_number_7 = new_grid.get((coordinates["x"] - 1, coordinates["y"] - 1), 0)
    adjacent_number_8 = new_grid.get((coordinates["x"] - 1, coordinates["y"]), 0)

    value = (
        adjacent_number_1
        + adjacent_number_2
        + adjacent_number_3
        + adjacent_number_4
        + adjacent_number_5
        + adjacent_number_6
        + adjacent_number_7
        + adjacent_number_8
    )

    new_grid[(coordinates["x"], coordinates["y"])] = value

    if change_axis_counter == change_interval:
        change_direction_counter += 1
        axis = "x" if axis == "y" else "y"
        change_axis_counter = 0

    if change_direction_counter == 2:
        direction *= -1
        change_interval += 1
        change_direction_counter = 0

print(
    f"The first value written larger than the puzzle input is: {value}"
)  # Answer Part 2
