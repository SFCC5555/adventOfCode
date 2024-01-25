# --- Day 2: Cube Conundrum ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    record_information = [
        {
            "id": int(game.split(":")[0].split()[1]),
            "rounds": [
                {color.split()[1]: int(color.split()[0]) for color in round.split(",")}
                for round in game.split(":")[1].split(";")
            ],
        }
        for game in file.read().split("\n")
    ]

MAX_RED_CUBES = 12
MAX_GREEN_CUBES = 13
MAX_BLUE_CUBES = 14

sum_possible_games_ids = 0

for game in record_information:
    for round in game["rounds"]:
        if (
            round.get("red", 0) > MAX_RED_CUBES
            or round.get("green", 0) > MAX_GREEN_CUBES
            or round.get("blue", 0) > MAX_BLUE_CUBES
        ):
            break
    else:
        sum_possible_games_ids += game["id"]

print(
    f"The sum of the IDs of those games is: {sum_possible_games_ids}"
)  # Answer Part 1

# Part 2

powers_sum = sum(
    max(round.get("red", 0) for round in game["rounds"])
    * max(round.get("green", 0) for round in game["rounds"])
    * max(round.get("blue", 0) for round in game["rounds"])
    for game in record_information
)

print(f"The sum of the power of these sets is: {powers_sum}")  # Answer Part 2
