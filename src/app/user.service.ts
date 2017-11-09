import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {TodoVO} from "./domain/todo.vo";

@Injectable()
export class UserService {

  private SERVER: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  addTodo(params: TodoVO) {
    return this.http.post(this.SERVER + '/api/todo', JSON.stringify(params), {headers: this.headers}).toPromise();
  }

  getTodoList() {
    return this.http.get(this.SERVER + '/api/todo').toPromise();
  }

  modifyTodo(params: TodoVO) {
    return this.http.put(this.SERVER + '/api/todo', JSON.stringify(params), {headers: this.headers}).toPromise();
  }

  removeTodo(todo_id: number) {
    return this.http.delete(this.SERVER + '/api/todo?todo_id=' + todo_id).toPromise();
  }

/*  private extractData(res: Response) {
    console.log(res);
    const body = res.json();
    return body || { };
  }*/

/*  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.log('handleError--------------------');
    // console.error(errMsg);
    return Promise.reject(errMsg);
  }*/
}
