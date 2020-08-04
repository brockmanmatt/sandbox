import React from 'react';
import { Text, View } from 'react-native';
import Box from "./TicTacToe/Box";

const TicTacToe = () => {

  const [gameState, setGameState] = React.useState([[0,0,0], [0,0,0], [0,0,0]]);

  const displayBoard = () => {
    return gameState.map((row, index) => {
      return <View key={index}>
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
        <View>{displayBoard()}</View>
      </View>
    )
}



export default TicTacToe

