import React from 'react';
import { Text, View } from 'react-native';

const TicTacToe = () => {

  const gameState = React.useState([[0,0,0], [0,0,0], [0,0,0]]);

  const displayBoard = () => {
    return gameState.map((row) => {
      return <View>{row[0]}</View>
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

