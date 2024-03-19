<?php

define("INPUT", 265149);

$coordinates = ['x' => 0, 'y' => 0];

$grid = [1 => ['x' => 0, 'y' => 0]];

$changeInterval = 1;

$axis = "x";

$direction = 1;

$changeAxisCounter = 0;

$changeDirectionCounter = 0;

for ($square = 2; $square <= INPUT; $square++) {
    $coordinates[$axis] += $direction;
    $changeAxisCounter++;
    $grid[$square] = ['x' => $coordinates['x'], 'y' => $coordinates['y']];

    if ($changeAxisCounter === $changeInterval) {
        $changeDirectionCounter++;
        $axis = $axis === "y" ? "x" : "y";
        $changeAxisCounter = 0;
    }

    if ($changeDirectionCounter === 2) {
        $direction *= -1;
        $changeInterval++;
        $changeDirectionCounter = 0;
    }
}

$steps = abs($grid[INPUT]['x']) + abs($grid[INPUT]['y']);

echo "The steps required are: $steps\n"; // Answer Part 1

// Part 2

$coordinates = ['x' => 0, 'y' => 0];

$newGrid = ["0,0" => 1];

$changeInterval = 1;

$axis = "x";

$direction = 1;

$changeAxisCounter = 0;

$changeDirectionCounter = 0;

$value = 0;

while ($value < INPUT) {
    $coordinates[$axis] += $direction;

    $changeAxisCounter++;

    $adjacentNumber1 = $newGrid[($coordinates['x'] - 1) . "," . ($coordinates['y'] + 1)] ?? 0;
    $adjacentNumber2 = $newGrid[$coordinates['x'] . "," . ($coordinates['y'] + 1)] ?? 0;
    $adjacentNumber3 = $newGrid[($coordinates['x'] + 1) . "," . ($coordinates['y'] + 1)] ?? 0;
    $adjacentNumber4 = $newGrid[($coordinates['x'] + 1) . "," . $coordinates['y']] ?? 0;
    $adjacentNumber5 = $newGrid[($coordinates['x'] + 1) . "," . ($coordinates['y'] - 1)] ?? 0;
    $adjacentNumber6 = $newGrid[$coordinates['x'] . "," . ($coordinates['y'] - 1)] ?? 0;
    $adjacentNumber7 = $newGrid[($coordinates['x'] - 1) . "," . ($coordinates['y'] - 1)] ?? 0;
    $adjacentNumber8 = $newGrid[($coordinates['x'] - 1) . "," . $coordinates['y']] ?? 0;

    $value =
        $adjacentNumber1 +
        $adjacentNumber2 +
        $adjacentNumber3 +
        $adjacentNumber4 +
        $adjacentNumber5 +
        $adjacentNumber6 +
        $adjacentNumber7 +
        $adjacentNumber8;

    $newGrid[$coordinates["x"] . "," . $coordinates["y"]] = $value;

    if ($changeAxisCounter === $changeInterval) {
        $changeDirectionCounter++;
        $axis = $axis === "y" ? "x" : "y";
        $changeAxisCounter = 0;
    }

    if ($changeDirectionCounter === 2) {
        $direction *= -1;
        $changeInterval++;
        $changeDirectionCounter = 0;
    }
}

echo
    "The first value written larger than the puzzle input is: $value"
; // Answer Part 2
