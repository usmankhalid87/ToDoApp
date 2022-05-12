import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toDoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(todo: Todo) {
    this.toDoDelete.emit(todo);
  }
}
