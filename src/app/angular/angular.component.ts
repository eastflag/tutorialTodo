import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoVo} from "../domain/todo.vo";
import {UserService} from "../user.service";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularComponent implements OnInit {

  todoList = new Array<TodoVo>();
  newTodo = new TodoVo();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  add_todo() {
    console.log('click');

    this.userService.addTodo(this.newTodo)
      .then((data: TodoVo) => {
        console.log(data);
        this.todoList.unshift(data);
      });

    this.newTodo = new TodoVo();
  }
}
