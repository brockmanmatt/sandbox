import React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react';
import { render } from 'react-dom';
import { TouchableOpacity } from 'react-native-gesture-handler';

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



const Square = (idx) =>{
  //This'll hold each square data (either O or X or null)
  return <TouchableOpacity><Text>{idx}</Text></TouchableOpacity>
}

const Board = () => {

  const defaultBoard = ["H", 2, 3, 4, 5, 6, 7, 8, 9];

  //This'll have my squares
  const [
    mySquares,
    setMySquares,
  ] = useState(defaultBoard)

  //setMySquares;

    return mySquares.map(Square)

}

const TicTacToe = () => {
    return (
      <View>
        <Board />
      </View>
    )
}

export default TicTacToe

