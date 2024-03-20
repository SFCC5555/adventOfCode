<?php
// --- Day 1: Not Quite Lisp ---

$input = "day1Input.txt";
$instructions = str_split(file_get_contents($input));

$floor = 0;

foreach ($instructions as $instruction) {
    $floor += $instruction === "(" ? 1 : -1;
}

echo "The instructions take Santa to the floor: $floor\n"; // Answer Part 1

// Part 2

$floor = 0;

foreach ($instructions as $index => $instruction) {

    $floor += $instruction === "(" ? 1 : -1;

    if ($floor === -1) {
        $positionToEnterTheBasement = $index + 1;
        break;
    }
}

echo "The position of the instruction to enter the basement is: $positionToEnterTheBasement\n"; // Answer Part 2
