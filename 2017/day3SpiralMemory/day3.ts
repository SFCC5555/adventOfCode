const input: number = 265149;

interface Coordinates {
  x: number;
  y: number;
}

interface Grid {
  [key: number]: Coordinates;
}

let coordinates: Coordinates = { x: 0, y: 0 };

const grid: Grid = { 1: { x: 0, y: 0 } };

let changeInterval: number = 1;

let axis: "x" | "y" = "x";

let direction: 1 | -1 = 1;

let changeAxisCounter: number = 0;

let changeDirectionCounter: number = 0;

for (let square = 2; square <= input; square++) {
  coordinates[axis] += direction;
  changeAxisCounter++;
  grid[square] = { x: coordinates.x, y: coordinates.y };

  if (changeAxisCounter === changeInterval) {
    changeDirectionCounter++;
    axis = axis === "y" ? "x" : "y";
    changeAxisCounter = 0;
  }

  if (changeDirectionCounter === 2) {
    direction *= -1;
    changeInterval++;
    changeDirectionCounter = 0;
  }
}

const steps: number = Math.abs(grid[input].x) + Math.abs(grid[input].y);

console.log(`The steps required are: ${steps}`); // Answer Part 1

// Part 2

coordinates = { x: 0, y: 0 };

interface NewGrid {
  [key: string]: number;
}

const newGrid: NewGrid = { "0,0": 1 };

changeInterval = 1;

axis = "x";

direction = 1;

changeAxisCounter = 0;

changeDirectionCounter = 0;

let value: number = 0;

while (value < input) {
  coordinates[axis] += direction;

  changeAxisCounter++;

  const adjacentNumber1: number =
    newGrid[`${coordinates.x - 1},${coordinates.y + 1}`] || 0;
  const adjacentNumber2: number =
    newGrid[`${coordinates.x},${coordinates.y + 1}`] || 0;
  const adjacentNumber3: number =
    newGrid[`${coordinates.x + 1},${coordinates.y + 1}`] || 0;
  const adjacentNumber4: number =
    newGrid[`${coordinates.x + 1},${coordinates.y}`] || 0;
  const adjacentNumber5: number =
    newGrid[`${coordinates.x + 1},${coordinates.y - 1}`] || 0;
  const adjacentNumber6: number =
    newGrid[`${coordinates.x},${coordinates.y - 1}`] || 0;
  const adjacentNumber7: number =
    newGrid[`${coordinates.x - 1},${coordinates.y - 1}`] || 0;
  const adjacentNumber8: number =
    newGrid[`${coordinates.x - 1},${coordinates.y}`] || 0;

  value =
    adjacentNumber1 +
    adjacentNumber2 +
    adjacentNumber3 +
    adjacentNumber4 +
    adjacentNumber5 +
    adjacentNumber6 +
    adjacentNumber7 +
    adjacentNumber8;

  newGrid[`${coordinates.x},${coordinates.y}`] = value;

  if (changeAxisCounter === changeInterval) {
    changeDirectionCounter++;
    axis = axis === "y" ? "x" : "y";
    changeAxisCounter = 0;
  }

  if (changeDirectionCounter === 2) {
    direction *= -1;
    changeInterval++;
    changeDirectionCounter = 0;
  }
}

console.log(
  `The first value written larger than the puzzle input is: ${value}`
); // Answer Part 2
