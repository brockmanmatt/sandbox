import { LifeState } from "../types/LifeState";

const initialState: LifeState = {
  grid: [
    [true, true, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
  ],
  speed: 1000,
};

export default initialState;
