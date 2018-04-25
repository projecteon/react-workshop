import { combineReducers, Reducer } from 'redux';
import * as ToDo from '../reducers/ToDo';

export type ApplicationState = {
  todo: ToDo.ToDoState;
};

export const reducers = combineReducers<ApplicationState>({
  todo: ToDo.reducer,
});
