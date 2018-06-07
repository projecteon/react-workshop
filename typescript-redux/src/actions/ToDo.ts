export enum ToDoActionTypes {
  IncreaseCounter = 'IncreaseCounter',
  DecreaseCounter = 'DecreaseCounter',
}


export type IncreaseCounterAction = {
  type: ToDoActionTypes.IncreaseCounter;
};

export type DecreaseCounterAction = {
  type: ToDoActionTypes.DecreaseCounter;
};

export type ToDoActions = IncreaseCounterAction | DecreaseCounterAction;

export function increaseCounter(): IncreaseCounterAction {
  return {
    type: ToDoActionTypes.IncreaseCounter,
  };
}

export function decreaseCounter(): DecreaseCounterAction {
  return {
    type: ToDoActionTypes.DecreaseCounter,
  };
}
