import { ActionReducerMap } from '@ngrx/store';
import { validFilters } from './filters/filters.actions';
import { filterReducer } from './filters/filters.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
