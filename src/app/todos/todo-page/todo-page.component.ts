import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { toggleAllItems } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  public completed: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAllItems() {
    this.completed = !this.completed;

    this.store.dispatch(toggleAllItems({ completed: this.completed }));
  }
}
