import { LifeState } from "../types/LifeState";

const initialState: LifeState = {
  grid: [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  speed: 1000,
};

export default initialState;
