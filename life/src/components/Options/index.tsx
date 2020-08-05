import React, { useContext } from "react";
import "./styles.css";
import { LifeContext } from "../../data/store";

function Options() {
  const { lifeState, dispatch } = useContext(LifeContext);

  return (
    <div className="options">
      <div>
        <label>Grid dimensions</label>
        <input type="number" min={10} /> x <input type="number" min={10} />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "toggle-play", payload: {} })}>
          {lifeState.playing ? "Pause" : "Play"}
        </button>
        <button onClick={() => dispatch({ type: "reset", payload: {} })}>Reset</button>
      </div>
    </div>
  );
}

export default Options;
