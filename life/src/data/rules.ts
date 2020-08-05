import { CellNeighbors } from "../types/CellNeighbors";
import { Location } from "../types/Location";

const TOTAL_NEIGHBORS = 8;

export default function rules(grid: boolean[][]): boolean[][] {
  return grid.map((row: boolean[], x: number) => {
    return row.map((cell: boolean, y: number) => {
      const alive = getAliveNeighborsCount({ x, y }, grid);
      const surroundings: CellNeighbors = {
        alive,
        dead: TOTAL_NEIGHBORS - alive,
      };
      return handleCellState(cell, surroundings);
    });
  });
}

function getAliveNeighborsCount(location: Location, grid: boolean[][]): number {
  const cellArray: boolean[] = [];
  let x;
  let y;
  for (x = location.x - 1; x < location.x + 2; x++) {
    for (y = location.y - 1; y < location.y + 2; y++) {
      // skip for current location
      if (!(x === location.x && y === location.y)) {
        // if location is out of matrix scope treat it as dead
        if (grid[x] === undefined || grid[x][y] === undefined) {
          cellArray.push(false);
        } else {
          cellArray.push(grid[x][y]);
        }
      }
    }
  }
  return cellArray.filter((cell) => cell).length;
}

function handleCellState(cell: boolean, surroundings: CellNeighbors): boolean {
  // if alive
  if (cell) {
    if (surroundings.alive < 2 || surroundings.alive > 3) {
      // ya ded.
      return false;
    }
  }
}
