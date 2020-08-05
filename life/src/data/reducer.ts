import { LifeState, LifeStateAction } from "../types/LifeState";
import initialState from "./initialState";

export default function reducer(state: LifeState, action: LifeStateAction) {
  switch (action.type) {
    case 'increment':
      return initialState;
    case 'decrement':
      return initialState;
    default:
      throw new Error();
  }
};