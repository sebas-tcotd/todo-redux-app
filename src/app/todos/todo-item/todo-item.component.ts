import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

import { Todo } from '../models/todo.model';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('physicalInput') physicalInput!: ElementRef;

  public isCompleted!: FormControl;
  public todoInput!: FormControl;

  public isItemBeingEdited: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todo = { ...this.todo };
    this.isCompleted = new FormControl(this.todo.completed);
    this.todoInput = new FormControl(this.todo.text, Validators.required);
    this.isCompleted.valueChanges.subscribe((value) =>
      this.store.dispatch(todoActions.toggleTask({ id: this.todo.id }))
    );
  }

  editItem() {
    this.isItemBeingEdited = true;
    this.todoInput.setValue(this.todo.text);

    setTimeout(() => {
      this.physicalInput.nativeElement.focus();
    }, 1);
  }

  finishEdition() {
    this.isItemBeingEdited = false;

    if (this.todoInput.invalid) return;
    if (this.todoInput.value === this.todo.text) return;

    this.store.dispatch(
      todoActions.editTodo({ id: this.todo.id, text: this.todoInput.value })
    );
  }

  deleteTodoItem() {
    this.store.dispatch(todoActions.deleteTodo({ id: this.todo.id }));
  }
}
