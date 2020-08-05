import React, { useReducer } from "react";
import "./App.css";

import initialState from "./data/initialState";
import lifeReducer from "./data/reducer";
import GridRow from "./components/GridRow";

function App() {
  const [lifeState, dispatch] = useReducer(lifeReducer, initialState);

  const displayLife = () => {
    return lifeState.grid.map((row, i) => <GridRow key={i} {...{ row }} />);
  };

  return <div className="App">{displayLife()}</div>;
}

export default App;
