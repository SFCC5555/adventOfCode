# --- Day 2: I Was Told There Would Be No Math ---

input = "day2Input.txt"

with open(input, "r", encoding="utf-8") as file:
    presents = file.read().split("\n")

total_areas = list()
for dimensions in presents:
    [l, w, h] = map(int, dimensions.split("x"))

    area_1 = l * w
    area_2 = l * h
    area_3 = w * h

    min_area = min(area_1, area_2, area_3)

    total_area = 2 * area_1 + 2 * area_2 + 2 * area_3 + min_area

    total_areas.append(total_area)

sum_total_areas = sum(total_areas)

print(
    f"The total square feet of wrapping paper they should order is: {sum_total_areas}"
)  # Answer Part 1
