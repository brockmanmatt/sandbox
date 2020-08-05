import React, { useContext } from "react";
import "./styles.css";
import { LifeContext } from "../../data/store";
import { Location } from "../../types/Location";

interface IProps {
  cell: boolean;
  location: Location;
}

function Cell({ cell, location }: IProps) {
  const { lifeState, dispatch } = useContext(LifeContext);
  return (
    <div
      className={`cell ${cell ? "alive" : "dead"}`}
      onClick={() => {
        const newGrid = lifeState.grid.map((i) => i.slice()); // avoid mutations
        newGrid[location.x][location.y] = !newGrid[location.x][location.y];
        dispatch({ type: "update", payload: { ...lifeState, grid: newGrid } });
      }}
    ></div>
  );
}

export default Cell;
