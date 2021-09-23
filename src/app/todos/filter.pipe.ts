import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filters/filters.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);

      case 'pendings':
        return todos.filter((todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
