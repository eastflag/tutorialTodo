import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoVo} from "../domain/todo.vo";
import {UserService} from "../user.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translate(0, 0)'})),
      transition('void => *', [
        style({transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translate(0, -100%)', opacity: '0'}))
      ])
    ])
  ]
})
export class AngularComponent implements OnInit {

  todoList = new Array<TodoVo>();
  newTodo = new TodoVo();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    console.log('getTodoList');
    this.userService.getTodoList()
      .then(data => {
        this.todoList = data;
      });
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
