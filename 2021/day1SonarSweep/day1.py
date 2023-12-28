# --- Day 1: Sonar Sweep ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    report = [int(m) for m in file.read().split("\n")]

larger_measurements = 0

for i in range(1, len(report)):
    if report[i] > report[i - 1]:
        larger_measurements += 1

print(
    f"The number of measurements that are larger than the previous measurement is: {larger_measurements}"
)  # Answer Part 1

# Part 2

three_measurement_list = [
    m + report[i + 1] + report[i + 2]
    for i, m in enumerate(report)
    if i < len(report) - 2
]

larger_sum_measurements = 0

for i in range(1, len(three_measurement_list)):
    if three_measurement_list[i] > three_measurement_list[i - 1]:
        larger_sum_measurements += 1

print(
    f"The number of sum measurements that are larger than the previous sum measurement is: {larger_sum_measurements}"
)  # Answer Part 2
