import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  toDos: Todo[];
  constructor() {
    this.toDos = [
      {
        sno: 1,
        title: 'to do title 1',
        desc: 'to do 1',
        active: true,
      },
      {
        sno: 2,
        title: 'to do title 2',
        desc: 'to do 2',
        active: true,
      },
      {
        sno: 3,
        title: 'to do title 3',
        desc: 'to do 3',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deleteToDo(todo: Todo) {
    let index = this.toDos.indexOf(todo);
    this.toDos.splice(index, 1);
  }

  addToDo(todo: Todo) {
    this.toDos.push(todo);
  }
}
