import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import initialState from "./data/initialState";
import lifeReducer from "./data/reducer";

function App() {

  const [ lifeState, dispatch ] = useReducer(lifeReducer, initialState)

  const displayLife = () => {
    return lifeState.grid.map((x) => {
      return <div>here</div>
    });
  }

  return (
    <div className="App">
      {displayLife()}
    </div>
  );
}

export default App;
