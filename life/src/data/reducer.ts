import { LifeState, LifeStateAction } from "../types/LifeState";
import initialState from "./initialState";

export default function reducer(state: LifeState, action: LifeStateAction) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset": {
      return initialState;
    }
    default:
      throw new Error();
  }
}
