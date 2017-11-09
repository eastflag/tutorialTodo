import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoVO} from "../domain/todo.vo";
import {UserService} from "../user.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ResultVO} from "../domain/result.vo";

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

  todoList = new Array<TodoVO>();
  newTodo = new TodoVO();
  // 취소시 복원하기 위한 데이터를 저장하는 컬렉션 :  number 에는 todo_id 저장
  tempTodoList: Map<number, TodoVO> = new Map<number, TodoVO>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    console.log('getTodoList');
    this.userService.getTodoList()
      .then((data: Array<TodoVO>) => {
        this.todoList = data;
      });
  }

  add_todo() {
    console.log('click');

    this.userService.addTodo(this.newTodo)
      .then((data: TodoVO) => {
        console.log(data);
        this.todoList.unshift(data);
      });

    this.newTodo = new TodoVO();
  }

  modify(item: TodoVO) {
    this.userService.modifyTodo(item)
      .then((data: TodoVO) => {
        item.isFinished = data.isFinished;
        item.todo = data.todo;
        // 에디터 상태 복원
        item.isEdited = false;
      });
  }

  restore(todoVo: TodoVO) {
    todoVo.isEdited = false;

    let tempTodo = this.tempTodoList.get(todoVo.todo_id);
    todoVo.isFinished = tempTodo.isFinished;
    todoVo.todo = tempTodo.todo;
  }


  save(todoVo: TodoVO) {
    todoVo.isEdited = true;

    let tempTodo = new TodoVO();
    tempTodo.isFinished = todoVo.isFinished;
    tempTodo.todo = todoVo.todo;
    this.tempTodoList.set(todoVo.todo_id, tempTodo);
  }

  remove(todoVo: TodoVO) {
    const result = confirm(todoVo.todo + '을(를) 삭제하시겠습니까?');
    if (result) {
      this.userService.removeTodo(todoVo.todo_id)
        .then((res: ResultVO) => {
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
}
