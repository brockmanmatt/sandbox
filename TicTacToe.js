import React from 'react';
import { Text, View } from 'react-native';
import Box from "./TicTacToe/Box";

const TicTacToe = () => {

  const [gameState, setGameState] = React.useState([[0,0,0], [0,0,0], [0,0,0]]);

  const displayBoard = () => {
    return gameState.map((row) => {
      return row.map((column) => {
        return <Box boxState={column}/>
      })
    })
  }

    return (
      <View>
        <Text>Open up TicTacToe.js to start working on your game!</Text>
        {displayBoard()}
      </View>
    )
}



export default TicTacToe

