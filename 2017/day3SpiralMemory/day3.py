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
