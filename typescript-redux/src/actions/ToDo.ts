import { INCREASE_COUNTER, DECREASE_COUNTER } from '../constants/ToDo';

export type IncreaseCounterAction = {
  type: INCREASE_COUNTER;
};

export type DecreaseCounterAction = {
  type: DECREASE_COUNTER;
};

export type ToDoActions = IncreaseCounterAction | DecreaseCounterAction;

export function increaseCounter(): IncreaseCounterAction {
  return {
    type: INCREASE_COUNTER,
  };
}

export function decreaseCounter(): DecreaseCounterAction {
  return {
    type: DECREASE_COUNTER,
  };
}
