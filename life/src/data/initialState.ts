import { LifeState } from "../types/LifeState";
import generateGrid from "../utilities/generateGrid";

const initialState: LifeState = {
  grid: generateGrid(25),
  speed: 1000,
  playing: true,
};

export default initialState;
