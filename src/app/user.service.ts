import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {TodoVO} from "./domain/todo.vo";
import {MemberVO} from "./domain/member.vo";
import {ResultVO} from "./domain/result.vo";
import {CommentVO} from "./domain/comment.vo";

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

  // login & signUp
  signUp(params: MemberVO) {
    return this.http.post(this.SERVER + '/api/signUp', JSON.stringify(params), {headers: this.headers})
      .toPromise();
  }

  login(params: MemberVO) {
    return this.http.post(this.SERVER + '/api/login', JSON.stringify(params), {headers: this.headers})
      .toPromise();
  }

  // 뉴스 관리 ---------------------------------------------------------------------------------------------------------
  findNews(params: any) {
    return this.http.post(this.SERVER + '/api/newsList', JSON.stringify(params), {headers: this.headers});
  }

  findOneNews(params: any) {
    return this.http.get(this.SERVER + '/api/news?news_id=' + params);
  }

  // 댓글 관리 ---------------------------------------------------------------------------------------------------------
  findComment(params: any) {
    return this.http.get(this.SERVER + '/api/comment?news_id=' + params);
  }

  addComment(params: any) {
    return this.http.post(this.SERVER + '/api/comment', JSON.stringify(params), {headers: this.headers});
  }

  modifyComment(params: any) {
    return this.http.put(this.SERVER + '/api/comment', JSON.stringify(params), {headers: this.headers});
  }

  removeComment(params: any) {
    return this.http.delete(this.SERVER + '/api/comment?comment_id=' + params);
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
