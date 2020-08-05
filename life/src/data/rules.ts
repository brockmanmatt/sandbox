import { CellNeighbors } from "../types/CellNeighbors";
import { Location } from "../types/Location";

export default function rules(grid: boolean[][]): boolean[][] {
  return grid.map((row: boolean[], x: number) => {
    return row.map((cell: boolean, y: number) => {
      const alive = getAliveNeighborsCount({ x, y }, grid);
      const surroundings: CellNeighbors = {
        alive,
        dead: 9 - alive,
      };
      return true;
      // return handleCellState(cell, surroundings);
    });
  });
}

function getAliveNeighborsCount(location: Location, grid: boolean[][]): number {
  const cellArray: boolean[] = [];
  let x;
  let y;
  for (x = location.x - 1; x < location.x + 2; x++) {
    for (y = location.y - 1; y < location.y + 2; y++) {
      // if location is out of grid scope treat it as dead
      if (grid[x] === undefined || grid[x][y] === undefined) {
        cellArray.push(false);
      } else {
        cellArray.push(grid[x][y]);
      }
    }
  }
  console.log(cellArray);

  // const neighbors = [
  //   grid[location.x - 1][location.y - 1], // top left
  //   grid[location.x][location.y - 1], // top middle
  //   grid[location.x + 1][location.y - 1], // top right
  //   grid[location.x - 1][location.y], // left
  //   grid[location.x + 1][location.y], // right
  //   grid[location.x - 1][location.y + 1], // bottom left
  //   grid[location.x][location.y + 1], // bottom middle
  //   grid[location.x + 1][location.y + 1], // bottom right
  // ];
  // console.log(neighbors);
  return 5;
}

// function handleCellState(cell: boolean, surroundings): boolean {}
