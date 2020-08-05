import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import initialState from "./data/initialState";
import lifeReducer from "./data/reducer";
import { LifeState } from './types/LifeState';

function App() {

  const [ lifeState, dispatch ] = useReducer(lifeReducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
