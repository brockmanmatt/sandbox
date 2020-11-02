import React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react';
import { render } from 'react-dom';

/*
* Visually represent the grid
1) 3x3 grid, buttons for that
 - Make buttons
 - store them with locations

* Allow at least two players to play the game
 - A, B state

* Implement Win conditions
- 3 consecutive (array of potential wins)

* Implement Draw conditions
- no more moves

* Allow users to clear the board
- easy eenough
*/



const Square = () =>{
  //This'll hold each square data (either O or X or null)

}

const Board = () => {
  //This'll have my squares
  const [
    mySquares,
    setMySquares,
  ] = useState([1, null, null, null, null, null, null, null, null])

  //setMySquares;

    return mySquares

}

const TicTacToe = () => {
    return (
      <View>
        <Board />
      </View>
    )
}

export default TicTacToe

