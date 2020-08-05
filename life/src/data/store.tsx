import React from "react";
import initialState from "./initialState";
import lifeReducer from "./reducer";
import { LifeState, LifeStateAction } from "../types/LifeState";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const LifeContext = React.createContext<{
  lifeState: LifeState;
  dispatch: React.Dispatch<LifeStateAction>;
}>({ lifeState: initialState, dispatch: () => null });

export const LifeStore = ({ children }: IProps) => {
  const [lifeState, dispatch] = React.useReducer(lifeReducer, initialState);

  return <LifeContext.Provider value={{ lifeState, dispatch }}>{children}</LifeContext.Provider>;
};
