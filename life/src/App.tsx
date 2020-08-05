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
      const nextGridState = applyRules(lifeState.grid);
      console.log(lifeState);
      dispatch({ type: "update", payload: { ...lifeState, grid: nextGridState } });
    }, lifeState.speed);
    return () => clearInterval(interval);
  }, [lifeState]);

  const displayLife = () => {
    return lifeState.grid.map((row, i) => <GridRow key={i} {...{ row }} />);
  };

  return (
    <div className="App">
      <Options />
      <div className="grid">{displayLife()}</div>
    </div>
  );
}

export default App;
