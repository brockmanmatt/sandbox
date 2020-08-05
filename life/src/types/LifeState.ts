export type LifeState = {
  grid: boolean[][];
  speed: number;
  playing: boolean;
};

export type LifeStateAction = {
  type: string;
  payload: Partial<LifeState>;
};
