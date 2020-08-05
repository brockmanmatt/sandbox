import React from "react";
import "./styles.css";

interface IProps {
  row: boolean[];
}

function GridRow({ row }: IProps) {
  const displayCells = () => {
    return row.map((cell, i) => <div key={i}>{cell}</div>);
  };
  return <>{displayCells()}</>;
}

export default GridRow;
