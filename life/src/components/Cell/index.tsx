import React from "react";
import "./styles.css";

interface IProps {
  cellState: boolean;
}

function Cell({ cellState }: IProps) {
  return <div className={`cell ${cellState ? "alive" : "dead"}`}></div>;
}

export default Cell;
