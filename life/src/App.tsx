import React, { useReducer, useEffect } from "react";
import "./App.css";

import initialState from "./data/initialState";
import lifeReducer from "./data/reducer";
import GridRow from "./components/GridRow";
import applyRules from "./data/rules";

function App() {
  const [lifeState, dispatch] = useReducer(lifeReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextGridState = applyRules(lifeState.grid);
      console.log(lifeState);
      dispatch({ type: "update", payload: { ...lifeState, grid: nextGridState } });
    }, lifeState.speed);
    return () => clearInterval(interval);
  }, [lifeState]);

  const displayLife = () => {
    return lifeState.grid.map((row, i) => <GridRow key={i} {...{ row }} />);
  };

  return <div className="App">{displayLife()}</div>;
}

export default App;
