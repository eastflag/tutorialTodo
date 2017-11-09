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
        animate(300, style({transform: 'translate(100%, 0)', opacity: '0'}))
      ])
    ])
  ]
})
export class AngularComponent implements OnInit {

  todoList = new Array<TodoVo>();
  newTodo = new TodoVo();
  // 취소시 복원하기 위한 데이터를 저장하는 컬렉션 :  number 에는 todo_id 저장
  tempTodoList: Map<number, TodoVo> = new Map<number, TodoVo>();

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

  modify(item: TodoVo) {
    this.userService.modifyTodo(item)
      .then((data: TodoVo) => {
        item.isFinished = data.isFinished;
        item.todo = data.todo;
        // 에디터 상태 복원
        item.isEdited = false;
      });
  }

  remove(todoVo: TodoVo) {
    const result = confirm(todoVo.todo + '을(를) 삭제하시겠습니까?');
    if (result) {
      this.userService.removeTodo(todoVo.todo_id)
        .then(res => {
          if (res.result === 0) {
            this.todoList.forEach((item, index) => {
              if (item.todo_id === todoVo.todo_id) {
                this.todoList.splice(index, 1);
                }
            });
          }
        });
    }
  }

  save(todoVo: TodoVo) {
    todoVo.isEdited = true;

    let tempTodo = new TodoVo();
    tempTodo.isFinished = todoVo.isFinished;
    tempTodo.todo = todoVo.todo;
    this.tempTodoList.set(todoVo.todo_id, tempTodo);
  }

  restore(todoVo: TodoVo) {
    todoVo.isEdited = false;

    let tempTodo = this.tempTodoList.get(todoVo.todo_id);
    todoVo.isFinished = tempTodo.isFinished;
    todoVo.todo = tempTodo.todo;
  }
}
