import React from 'react';
import { Text, View } from 'react-native';

const Square = i => {
  return (
    <button className="square">
      {/* TODO */}
    </button>
  );
}

const Board = i => {
  const status = 'Next player: X';

  return (
    <View>
      <View className="status"><Text>{status}</Text></View>
      <View className="board-row">
        <Square id='0'></Square>
        <Square id='1'></Square>
        <Square id='2'></Square>
      </View>
      <View className="board-row">
        <Square id='3'></Square>
        <Square id='4'></Square>
        <Square id='5'></Square>
      </View>
      <View className="board-row">
        <Square id='6'></Square>
        <Square id='7'></Square>
        <Square id='8'></Square>
      </View>
    </View>
  );
}

const TicTacToe = () => {
    return (
        <View>
          <Board />
        </View>
    )
}

export default TicTacToe

