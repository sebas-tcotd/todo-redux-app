import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { createTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoItemInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.todoItemInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodoItem() {
    if (this.todoItemInput.invalid) return;

    this.store.dispatch(createTodo({ text: this.todoItemInput.value }));

    this.todoItemInput.reset();
  }
}
