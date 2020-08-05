import { CellNeighbors } from "../types/CellNeighbors";
import { Location } from "../types/Location";

export default function rules(grid: boolean[][]) {
  const newState = grid.map((row: boolean[], x: number) => {
    return row.map((cell: boolean, y: number) => {
      const alive = getAliveNeighborsCount({ x, y }, grid);
      const surroundings: CellNeighbors = {
        alive,
        dead: 9 - alive,
      };
      // return handleCellState(cell, surroundings);
    });
  });
}

function getAliveNeighborsCount(location: Location, grid: boolean[][]): number {
  // const aliveCount = 0;
  const neighbors = [
    grid[location.x - 1][location.y - 1] || false, // top left
    grid[location.x][location.y - 1] || false, // top middle
    grid[location.x + 1][location.y - 1] || false, // top right
    grid[location.x - 1][location.y] || false, // left
    grid[location.x + 1][location.y] || false, // right
    grid[location.x - 1][location.y + 1] || false, // bottom left
    grid[location.x][location.y + 1] || false, // bottom middle
    grid[location.x + 1][location.y + 1] || false, // bottom middle
  ];
  console.log(neighbors);
  return 5;
}

// function handleCellState(cell: boolean, surroundings): boolean {}
