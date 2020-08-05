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
  return <div className={`cell ${cell ? "alive" : "dead"}`} onClick={() => dispatch}></div>;
}

export default Cell;
