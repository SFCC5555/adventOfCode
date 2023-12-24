# --- Day 1: Report Repair ---

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    expense_report = [int(line) for line in file.read().split("\n")]

for i, entrie in enumerate(expense_report):
    second_entrie = 2020 - entrie
    entries_set = set(expense_report[:i] + expense_report[i + 1 :])
    if second_entrie in entries_set:
        print(
            f"The two entries that sum to 2020 are {entrie} and {second_entrie} and the product are {entrie * second_entrie}"
        )  # Answer Part 1
        break


# Part 2

for i, entrie in enumerate(expense_report):
    entries_list = expense_report[:i] + expense_report[i + 1 :]

    for j, second_entrie in enumerate(entries_list):
        third_entrie = 2020 - entrie - second_entrie

        entries_set = set(entries_list[:j] + entries_list[j + 1 :])
        if third_entrie in entries_set:
            print(
                f"The three entries that sum to 2020 are {entrie}, {second_entrie} and {third_entrie} and the product are {entrie * second_entrie * third_entrie}"
            )  # Answer Part 2
            break
    else:
        continue
    break
