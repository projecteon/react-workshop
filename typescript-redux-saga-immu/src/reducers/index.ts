import { combineReducers } from 'redux';
import * as ToDo from '../reducers/ToDo';

export interface IApplicationState {
  todo: ToDo.IToDoState;
}

export const reducers = combineReducers<IApplicationState>({
  todo: ToDo.reducer,
});
