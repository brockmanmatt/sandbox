export type LifeState = {
  grid: boolean[][];
}

export type LifeStateAction = {
  type: string;
  payload: Partial<LifeState>;
}