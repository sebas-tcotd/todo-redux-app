import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ text: string }>()
);

export const toggleTask = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const toggleAllItems = createAction(
  '[TODO] Toggle all items',
  props<{ completed: boolean }>()
);

export const deleteCompleted = createAction('[TODO] Delete completed tasks');
