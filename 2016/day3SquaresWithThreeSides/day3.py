# --- Day 3: Squares With Three Sides ---

input = "day3Input.txt"

with open(input, "r", encoding="utf-8") as file:
    triangle_sides_list = [
        [int(side) for side in triangle.split()] for triangle in file.read().split("\n")
    ]

possible_triangles = 0

for triangle in triangle_sides_list:
    triangle.sort()
    side_1, side_2, side_3 = triangle
    if side_1 + side_2 > side_3:
        possible_triangles += 1

print(
    f"There are {possible_triangles} possible triangles listed in the puzzle input"
)  # Answer Part 1
