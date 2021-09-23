import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from '../../filters/filters.actions';
import { setFilter, validFilters } from '../../filters/filters.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  public actualFilter: actions.validFilters = 'todos';
  public filters: actions.validFilters[] = ['todos', 'completed', 'pendings'];
  public pendings: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store
    //   .select('filter')
    //   .subscribe((filter) => (this.actualFilter = filter));

    this.store.subscribe((state) => {
      this.actualFilter = state.filter;
      this.pendings = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }));
  }

  cleanCompletedItems() {
    this.store.dispatch(deleteCompleted());
  }
}
