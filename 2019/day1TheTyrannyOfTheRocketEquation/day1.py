# --- Day 1: The Tyranny of the Rocket Equation ---

from math import floor

input = "day1Input.txt"

with open(input, "r", encoding="utf-8") as file:
    modules = [int(module) for module in file.read().split("\n")]

total_fuel = sum([floor(module / 3) - 2 for module in modules])

print(
    f"The sum of the fuel requirements for all of the modules on the spacecraft is: {total_fuel}"
)  # Answer Part 1

# Part 2

total_total_fuel = 0

for module in modules:
    fuel = floor(module / 3) - 2
    mass = floor(fuel / 3) - 2

    while mass > 0:
        fuel += mass
        mass = floor(mass / 3) - 2

    total_total_fuel += fuel


print(
    f"The sum of the fuel requirements for all of the modules on the spacecraft when also taking into account the mass of the added fuel is: {total_total_fuel}"
)
# Answer Part 2
