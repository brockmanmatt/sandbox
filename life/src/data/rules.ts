import { CellNeighbors } from "../types/CellNeighbors";

export default function rules(grid: boolean[][]) {
  const newState = grid.map((row: boolean[], x: number) => {
    return row.map((cell: boolean, y: number) => {
      const surroundings: CellNeighbors = {
        alive: getAliveNeighborsCount({ x, y }, grid),
      };
      return handleCellState(cell, surroundings);
    });
  });
}

function getAliveNeighborsCount(cellLocation: Location, grid: boolean[][]): number {}

function handleCellState(cell: boolean, surroundings): boolean {}
