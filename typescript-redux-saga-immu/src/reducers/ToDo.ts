import produce from 'immer';
import { Reducer } from 'redux';
import { decreaseCounter, increaseCounter, ToDoActions, ToDoActionTypes } from '../actions/ToDo';

export interface IToDoState {
  counter: number;
}

export const actionCreators = {increaseCounter, decreaseCounter};

const unloadedState: IToDoState = { counter: 0 };
export const reducer: Reducer<IToDoState, ToDoActions> = (state = unloadedState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case ToDoActionTypes.IncreaseCounter:
        draft.counter = state.counter + 1;
        break;
      case ToDoActionTypes.DecreaseCounter:
        draft.counter = state.counter - 1;
        break;
      default:
        const exhaustiveCheck: never = action;
        if (exhaustiveCheck) {break;}
    }
  });
