import { LifeState, LifeStateAction } from "../types/LifeState";
import initialState from "./initialState";

export default function reducer(state: LifeState, action: LifeStateAction) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };

    default:
      throw new Error();
  }
}
