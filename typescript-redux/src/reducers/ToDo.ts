import { Reducer } from 'redux';
import { IncreaseCounterAction, DecreaseCounterAction, increaseCounter, ToDoActions, decreaseCounter, ToDoActionTypes } from '../actions/ToDo';

export type ToDoState = {
  counter: number;
};

export const actionCreators = {increaseCounter: increaseCounter, decreaseCounter: decreaseCounter};

const unloadedState: ToDoState = { counter: 0 };
export const reducer: Reducer<ToDoState, ToDoActions> = (state: ToDoState, action: ToDoActions) => {
  switch (action.type) {
    case ToDoActionTypes.IncreaseCounter:
      return  {...state, ...{ counter: state.counter + 1 }};
    case ToDoActionTypes.DecreaseCounter:
      return  {...state, ...{ counter: state.counter - 1 }};
    default:
      const exhaustiveCheck: never = action;
  }

  return state || unloadedState;
};
