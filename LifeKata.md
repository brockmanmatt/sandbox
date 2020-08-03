# Conways game of life kata
This kata is about calculating the next generation of Conway’s game of life, given any starting position. See [this link](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) for background on the game itself.

You start with a two dimensional grid of cells, where each cell is either alive or dead. When calcuating the next generation of the grid, follow these rules:

   1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   1. Any live cell with more than three live neighbours dies, as if by overcrowding.
   1. Any live cell with two or three live neighbours lives on to the next generation.
   1. Any dead cell with exactly three live neighbours becomes a live cell.
   
Each generation can then continue to the next.

## Requirement
We prefer to have as few restrictions as possible, but naturally some are required. Please be sure that the application meets the following requirements:

* Visually represent a two dimensional grid
* Implement All Rules
* Allow users to clear the board
* Allow users to generate new board
