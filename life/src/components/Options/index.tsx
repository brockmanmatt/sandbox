import React, { useContext } from "react";
import "./styles.css";
import { LifeContext } from "../../data/store";
import generateGrid from "../../utilities/generateGrid";

function Options() {
  const { lifeState, dispatch } = useContext(LifeContext);
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
          min={100}
          value={lifeState.speed}
          onChange={(e) => {
            dispatch({
              type: "update",
              payload: { ...lifeState, speed: parseInt(e.target.value) < 100 ? 100 : parseInt(e.target.value) },
            });
          }}
        />
      </div>
      <label>Number of Ticks: </label>
      <span>{lifeState.numberOfTicks}</span>
      <div>
        <button className="button" onClick={() => dispatch({ type: "toggle-play", payload: {} })}>
          {lifeState.playing ? "Pause" : "Play"}
        </button>
        <button className="button" onClick={() => dispatch({ type: "reset", payload: {} })}>
          Reset
        </button>
      </div>
      <h3>Directions</h3>
      <ul>
        <li>Click on the cells to make them alive(pause if needed).</li>
        <li>Row and col min length is 5 cells</li>
        <li>Speed min is 100ms (.1 seconds)</li>
      </ul>
    </div>
  );
}

export default Options;
