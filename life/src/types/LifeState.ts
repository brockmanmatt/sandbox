export type LifeState = {
  grid: boolean[][];
  speed: number;
  playing: boolean;
  numberOfTicks: number;
};

export type LifeStateAction = {
  type: string;
  payload: Partial<LifeState>;
};
