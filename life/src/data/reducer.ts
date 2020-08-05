import { LifeState, LifeStateAction } from "../types/LifeState";
import initialState from "./initialState";

export default function reducer(state: LifeState, action: LifeStateAction) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset": {
      return initialState;
    }
    case "toggle-play": {
      return { ...state, playing: !state.playing };
    }
    default:
      throw new Error();
  }
}
