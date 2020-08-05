import React, { useContext } from "react";
import "./styles.css";
import { LifeContext } from "../../data/store";
import generateGrid from "../../utilities/generateGrid";

function Options() {
  const { lifeState, dispatch } = useContext(LifeContext);
  console.log(lifeState);
  return (
    <div className="options">
      <div>
        <label>Row/Column length</label>
        <input
          type="number"
          min={5}
          value={lifeState.grid[0].length}
          onChange={(e) => {
            // console.log(e.target.value);
            dispatch({ type: "update", payload: { ...lifeState, grid: generateGrid(parseInt(e.target.value)) } });
          }}
        />
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
