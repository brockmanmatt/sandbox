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
        <label>Row/Col length</label>
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
        <label>Time Speed(ms)</label>
        <input
          type="number"
          min={5}
          value={lifeState.speed}
          onChange={(e) => {
            dispatch({ type: "update", payload: { ...lifeState, speed: parseInt(e.target.value) } });
          }}
        />
      </div>
      <div>
        <button className="button" onClick={() => dispatch({ type: "toggle-play", payload: {} })}>
          {lifeState.playing ? "Pause" : "Play"}
        </button>
        <button className="button" onClick={() => dispatch({ type: "reset", payload: {} })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Options;
