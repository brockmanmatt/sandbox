import React, { useReducer, useEffect } from "react";
import "./App.css";

import initialState from "./data/initialState";
import lifeReducer from "./data/reducer";
import GridRow from "./components/GridRow";

function App() {
  const [lifeState, dispatch] = useReducer(lifeReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
    }, lifeState.speed);
    return () => clearInterval(interval);
  }, []);

  const displayLife = () => {
    return lifeState.grid.map((row, i) => <GridRow key={i} {...{ row }} />);
  };

  return <div className="App">{displayLife()}</div>;
}

export default App;
