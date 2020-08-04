import React from 'react';
import { Text, View } from 'react-native';
import Box from "./TicTacToe/Box";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const TicTacToe = () => {


  const [gameState, dispatch] = React.useReducer(reducer, {currentPlayer: "one", boardState: [[0,0,0], [0,0,0], [0,0,0]] })

  const displayBoard = () => {
    return gameState.boardState.map((row, index) => {
      return <View key={index} style={{flexDirection: "row"}}>
        {displayRow(row)}
      </View>;
    })
  }

  const displayRow = (row) => {
    return row.map((column, index) => {
      return <Box key={index} boxState={column} />
    });
  }

    return (
      <View>
        <Text>Open up TicTacToe.js to start working on your game!</Text>
        <View>
          {displayBoard()}
        </View>
      </View>
    )
}



export default TicTacToe

