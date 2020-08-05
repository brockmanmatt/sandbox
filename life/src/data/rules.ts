export default function rules(grid: boolean[][]) {
  const newState = grid.map((gridRow: boolean[]) => {
    return gridRow.map((cell: boolean) => {
      return handleCellState(cell);
    });
  });
}

function handleCellState(cell: boolean) {}
