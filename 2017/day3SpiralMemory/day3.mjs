const input = 265149;

const coordinates = { x: 0, y: 0 };

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
