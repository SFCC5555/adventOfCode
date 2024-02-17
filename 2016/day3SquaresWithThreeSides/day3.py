# --- Day 3: Squares With Three Sides ---

input = "day3Input.txt"

with open(input, "r", encoding="utf-8") as file:
    triangle_sides_list = [
        [int(side) for side in triangle.split()] for triangle in file.read().split("\n")
    ]
possible_triangles = 0

for triangle in triangle_sides_list:
    triangle = triangle[:]
    triangle.sort()
    side_1, side_2, side_3 = triangle
    if side_1 + side_2 > side_3:
        possible_triangles += 1

print(
    f"There are {possible_triangles} possible triangles listed in the puzzle input"
)  # Answer Part 1

# Part 2

possible_triangles = 0

for index in range(0, len(triangle_sides_list), 3):
    triangle_1, triangle_2, triangle_3 = triangle_sides_list[index : index + 3]

    new_triangles = [
        [triangle_1[0], triangle_2[0], triangle_3[0]],
        [triangle_1[1], triangle_2[1], triangle_3[1]],
        [triangle_1[2], triangle_2[2], triangle_3[2]],
    ]

    for triangle in new_triangles:
        triangle = triangle[:]
        triangle.sort()
        side_1, side_2, side_3 = triangle
        if side_1 + side_2 > side_3:
            possible_triangles += 1

print(
    f"There are {possible_triangles} possible triangles listed in the puzzle input reading by columns"
)  # Answer Part 2
