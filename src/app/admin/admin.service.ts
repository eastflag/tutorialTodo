import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RequestOptions} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AdminService {

  private SERVER: string;
  private headers: HttpHeaders;

  // news 목록을 업데이트하기 위한 설정
  public refresh = new Subject<boolean>();
  public refresh$ = this.refresh.asObservable();

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // 뉴스 관리 ---------------------------------------------------------------------------------------------------------
  findNews(params: any): Promise<any>  {
    return this.http.post(this.SERVER + '/api/newsList', JSON.stringify(params), {headers: this.headers})
      .toPromise();
  }

  findOneNews(params: any) {
    return this.http.get(this.SERVER + '/api/news?news_id=' + params)
      .toPromise();
  }

  addNews(params: any) {
    return this.http.post(this.SERVER + '/api/news', JSON.stringify(params), {headers: this.headers})
      .toPromise();
  }

  modifyNews(params: any) {
    return this.http.put(this.SERVER + '/api/news', JSON.stringify(params), {headers: this.headers})
      .toPromise();
  }

  removeNews(params: any) {
    return this.http.delete(this.SERVER + '/api/news?news_id=' + params)
      .toPromise();
  }

  imageUpload(formData: FormData) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data'); //브라우저가 자동 생성함.
    // headers.append("Authorization", "Bearer " + sessionStorage.getItem("admin_token"));
    headers.append('Accept', 'application/json');

    return this.http.post('http://www.javabrain.kr:8080' + '/api/imageUpload', formData, {headers: headers})
      .toPromise();
  }
}
