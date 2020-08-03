import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TicTacToe from './TicTacToe.js'

const TicTacToeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TicTacToe></TicTacToe>
    </View>
  )
}

const LifeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Life!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TicTacToe" component={TicTacToeScreen} />
        <Tab.Screen name="Life" component={LifeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
