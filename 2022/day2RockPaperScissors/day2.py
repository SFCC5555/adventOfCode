# --- Day 2: Rock Paper Scissors ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    strategy_guide = [round.split() for round in file.read().split("\n")]

points = {
    "X": {"shape": 1, "A": 3, "B": 0, "C": 6},
    "Y": {"shape": 2, "A": 6, "B": 3, "C": 0},
    "Z": {"shape": 3, "A": 0, "B": 6, "C": 3},
}

total_score = sum(
    [
        points[your_choose]["shape"] + points[your_choose][opponent_choose]
        for opponent_choose, your_choose in strategy_guide
    ]
)

print(
    f"According to the strategy guide your total score is: {total_score}"
)  # Answer Part 1
