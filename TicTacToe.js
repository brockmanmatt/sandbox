import React from 'react';
import { Text, View } from 'react-native';

const TicTacToe = () => {

  const gameState = React.useState([[0,0,0], [0,0,0], [0,0,0]]);

    return (
      <View>
        <Text>Open up TicTacToe.js to start working on your game!</Text>
      </View>
    )
}

export default TicTacToe

