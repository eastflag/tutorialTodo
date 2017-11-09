import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoVo} from "../domain/todo.vo";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularComponent implements OnInit {

  todoList: Array<TodoVo>;
  newTodo = new TodoVo();

  constructor() { }

  ngOnInit() {
  }

  add_todo() {
    console.log('click');
  }
}
