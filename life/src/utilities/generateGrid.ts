import initialState from "../data/initialState";

export default function generateGrid(rowsAndColumns: number) {
  if (rowsAndColumns && rowsAndColumns >= 5) {
    const newGrid = [];
    let i;
    for (i = 0; i < rowsAndColumns; i++) {
      const newArray = new Array(rowsAndColumns).fill(false);
      newGrid.push(newArray);
    }
    return newGrid;
  }
  return initialState.grid;
}
