import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filters.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer<validFilters, Action>(
  initialState,
  on(setFilter, (state: validFilters, { filter }) => filter)
);

export function filterReducer(state: validFilters | undefined, action: Action) {
  return _filterReducer(state, action);
}
