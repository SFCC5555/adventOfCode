<?php

// --- Day 1: No Time for a Taxicab ---

$input = "day1Input.txt";
$instructions = explode(", ", file_get_contents($input));

$coordinates = ["x" => 0, "y" => 0];

$locations = ["0-0" => true]; // Part 2

$locationsRevisited = []; // Part 2

$faceDirection = "N";

$mechanism = [
    "N" => [
        "axis" => "x",
        "R" => ["newDirection" => "E", "value" => 1],
        "L" => ["newDirection" => "W", "value" => -1]
    ],
    "S" => [
        "axis" => "x",
        "R" => ["newDirection" => "W", "value" => -1],
        "L" => ["newDirection" => "E", "value" => 1]
    ],
    "E" => [
        "axis" => "y",
        "R" => ["newDirection" => "S", "value" => -1],
        "L" => ["newDirection" => "N", "value" => 1]
    ],
    "W" => [
        "axis" => "y",
        "R" => ["newDirection" => "N", "value" => 1],
        "L" => ["newDirection" => "S", "value" => -1]
    ]
];

foreach ($instructions as $instruction) {
    $sense = $instruction[0];
    $steps = intval(substr($instruction, 1));

    if (is_numeric($steps) && ($sense === "R" || $sense === "L")) {

        $newDirection = $mechanism[$faceDirection][$sense]["newDirection"];

        $value = $mechanism[$faceDirection][$sense]["value"];

        $axis = $mechanism[$faceDirection]["axis"];

        // Part 2

        for ($step = 1; $step <= $steps; $step++) {
            $location = $axis === "x" ? ($coordinates["x"] + ($step * $value)) . "-" . $coordinates["y"] : $coordinates["x"] . "-" . ($coordinates["y"] + ($step * $value));

            if (in_array($location, $locations)) {
                if ($axis === "x") {
                    $locationsRevisited[] = [
                        'x' => $coordinates['x'] + ($step * $value),
                        'y' => $coordinates['y']
                    ];
                } else {
                    $locationsRevisited[] = [
                        'x' => $coordinates['x'],
                        'y' => $coordinates['y'] + ($step * $value)
                    ];
                }
            } else {
                $locations[$location] = true;
            }
        }

        // Part 1  

        $coordinates[$axis] += $steps * $value;

        $faceDirection = $newDirection;
    }
}

// Part 1

$coordinatesX = $coordinates["x"];

$coordinatesY = $coordinates["y"];

$blocksAway = abs($coordinatesX) + abs($coordinatesY);

echo "The coordinates of the destination are { x: $coordinatesX, y: $coordinatesY} and they are $blocksAway blocks away.\n"; // Answer Part 1

// Part 2

$firstLocationRevisited = isset ($locationsRevisited[0]) ? $locationsRevisited[0] : ['x' => 'None', 'y' => 'None'];

$blocksAwayPart2 = abs($firstLocationRevisited['x']) + abs($firstLocationRevisited['y']);

echo "The coordinates of the destination (first location revisited) are { x: {$firstLocationRevisited['x']}, y: {$firstLocationRevisited['y']} } and they are " . ($blocksAwayPart2 ? $blocksAwayPart2 : "None") . " blocks away.\n"; // Answer Part 2 (Incomplete)