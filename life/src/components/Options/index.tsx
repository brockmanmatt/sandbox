import React, { useEffect, useContext } from "react";
import "./styles.css";
import { LifeContext } from "../../data/store";

function Options() {
  const { lifeState, dispatch } = useContext(LifeContext);

  return (
    <div className="options">
      <button onClick={() => dispatch({ type: "reset", payload: {} })}>Reset</button>
    </div>
  );
}

export default Options;
