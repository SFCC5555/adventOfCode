const input = 265149;

let coordinates = { x: 0, y: 0 };

const grid = { 1: { x: 0, y: 0 } };

let changeInterval = 1;

let axis = "x";

let direction = 1;

let changeAxisCounter = 0;

let changeDirectionCounter = 0;

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

const steps = Math.abs(grid[input].x) + Math.abs(grid[input].y);

console.log(`The steps required are: ${steps}`); // Answer Part 1

// Part 2

coordinates = { x: 0, y: 0 };

const newGrid = { "0,0": 1 };

changeInterval = 1;

axis = "x";

direction = 1;

changeAxisCounter = 0;

changeDirectionCounter = 0;

let value = 0;

while (value < input) {
  coordinates[axis] += direction;

  changeAxisCounter++;

  const adjacentNumber1 =
    newGrid[`${coordinates.x - 1},${coordinates.y + 1}`] || 0;
  const adjacentNumber2 = newGrid[`${coordinates.x},${coordinates.y + 1}`] || 0;
  const adjacentNumber3 =
    newGrid[`${coordinates.x + 1},${coordinates.y + 1}`] || 0;
  const adjacentNumber4 = newGrid[`${coordinates.x + 1},${coordinates.y}`] || 0;
  const adjacentNumber5 =
    newGrid[`${coordinates.x + 1},${coordinates.y - 1}`] || 0;
  const adjacentNumber6 = newGrid[`${coordinates.x},${coordinates.y - 1}`] || 0;
  const adjacentNumber7 =
    newGrid[`${coordinates.x - 1},${coordinates.y - 1}`] || 0;
  const adjacentNumber8 = newGrid[`${coordinates.x - 1},${coordinates.y}`] || 0;

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
