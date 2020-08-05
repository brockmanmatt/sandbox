export type LifeState = {
  grid: boolean[][];
  speed: number;
};

export type LifeStateAction = {
  type: string;
  payload: Partial<LifeState>;
};
