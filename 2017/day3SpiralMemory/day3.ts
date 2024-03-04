const input: number = 265149;

interface Coordinates {
  x: number;
  y: number;
}

interface Grid {
  [key: number]: Coordinates;
}

const coordinates: Coordinates = { x: 0, y: 0 };

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
