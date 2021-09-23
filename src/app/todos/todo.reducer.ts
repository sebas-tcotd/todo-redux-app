import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as todoActions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Iron-Man'),
  new Todo('Robar el escudo del cap'),
];

const _todoReducer = createReducer(
  initialState,
  on(todoActions.createTodo, (state, { text }) => [...state, new Todo(text)]),

  on(todoActions.toggleTask, (state, { id }) => {
    return state.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      } else {
        return todoItem;
      }
    });
  }),

  on(todoActions.editTodo, (state, { id, text }) => {
    return state.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          text,
        };
      } else {
        return todoItem;
      }
    });
  }),

  on(todoActions.deleteTodo, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),

  on(todoActions.toggleAllItems, (state, { completed }) => {
    return state.map((todo) => ({ ...todo, completed }));
  }),

  on(todoActions.deleteCompleted, (state) =>
    state.filter((todo) => !todo.completed)
  )
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
