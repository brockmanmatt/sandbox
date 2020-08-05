import React, { useEffect, useContext } from "react";
import "./App.css";
import GridRow from "./components/GridRow";
import applyRules from "./data/rules";
import { LifeContext } from "./data/store";
import Options from "./components/Options";

function App() {
  const { lifeState, dispatch } = useContext(LifeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lifeState.playing) {
        const nextGridState = applyRules(lifeState.grid);
        dispatch({ type: "update", payload: { ...lifeState, grid: nextGridState } });
      }
    }, lifeState.speed);
    return () => clearInterval(interval);
  }, [lifeState]);

  const displayLife = () => {
    return lifeState.grid.map((row, x) => <GridRow key={x} {...{ row, x }} />);
  };

  return (
    <div className="App">
      <Options />
      <div className="grid">{displayLife()}</div>
    </div>
  );
}

export default App;
