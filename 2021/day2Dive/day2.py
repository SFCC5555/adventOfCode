# --- Day 2: Dive! ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    planned_course = [step.split() for step in file.read().split("\n")]

position = {"horizontal_position": 0, "depth": 0}


steps_mechanism = {
    "forward": {"direction": "horizontal_position", "sense": 1},
    "up": {"direction": "depth", "sense": -1},
    "down": {"direction": "depth", "sense": 1},
}

for step_direction, step_value in planned_course:
    position[steps_mechanism[step_direction]["direction"]] += (
        int(step_value) * steps_mechanism[step_direction]["sense"]
    )

print(
    f"After following the planned course:\n Horizontal position: {position['horizontal_position']}\n Depth: {position['depth']}\n Product: {position['horizontal_position']*position['depth']}"
)  # Answer Part 1

# Part 2

position = {"horizontal_position": 0, "depth": 0, "aim": 0}

steps_mechanism = {
    "forward": {"direction": "horizontal_position", "sense": 1, "depth_factor": 1},
    "up": {"direction": "aim", "sense": -1, "depth_factor": 0},
    "down": {"direction": "aim", "sense": 1, "depth_factor": 0},
}

for step_direction, step_value in planned_course:
    position[steps_mechanism[step_direction]["direction"]] += (
        int(step_value) * steps_mechanism[step_direction]["sense"]
    )
    position["depth"] += (
        position["aim"] * int(step_value) * steps_mechanism[step_direction]["depth_factor"]
    )

print(
    f"After following the new instructions:\n Horizontal position: {position['horizontal_position']}\n Depth: {position['depth']}\n Product: {position['horizontal_position']*position['depth']}"
)  # Answer Part 2
