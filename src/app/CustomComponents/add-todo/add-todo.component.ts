import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string | undefined;
  desc: string | undefined;
  @Output() toDoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const toDo = {
      title: this.title,
      desc: this.desc,
      sno: 8,
      active: true,
    };

    this.toDoAdd.emit(toDo);
  }
}
