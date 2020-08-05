import React from "react";
import "./styles.css";
import Cell from "../Cell";

interface IProps {
  row: boolean[];
  x: number;
}

function GridRow({ row, x }: IProps) {
  const displayCells = () => {
    return row.map((cell, y) => <Cell key={y} {...{ cell }} location={{ x, y }} />);
  };
  return <div className="grid-row">{displayCells()}</div>;
}

export default GridRow;
