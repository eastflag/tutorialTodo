///<reference path="../../../node_modules/@angular/common/http/src/response.d.ts"/>
import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {CommentVO} from "../domain/comment.vo";
import {AuthGuardService} from "../auth/auth-guard.service";
import {UserService} from "../user.service";
import {PlatformLocation} from "@angular/common";
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {ResultVO} from "../domain/result.vo";
import {CommentDialogComponent} from "./comment.dialog.component";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentComponent implements OnChanges {
  // 부모가 news_id값을 바꾸면 업데이트하기 위해서 OnChanges 를 오버라이딩 해야한다.
  @Input()
  news_id: number;

  newComment: CommentVO = new CommentVO();
  commentList: Array<CommentVO>;

  constructor(private userService: UserService, private authService: AuthGuardService,
              private location: PlatformLocation, private snackBar: MatSnackBar, private dialog: MatDialog) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('news_id:' + this.news_id);
    this.getCommentList();
  }

  getCommentList() {
    this.userService.findComment(this.news_id)
      .subscribe((res: Array<CommentVO>) => {
        this.commentList = res;
      });
  }

  // textarea에 포커스가 오면 로그인을 체크한다. 완료시에 체크하면 입력된 내용을 저장했다 꺼내기가 번거롭다.
  checkLogin() {
    console.log('onfocus');
    // 로그인 체크
    this.authService.checkLogin(this.location.pathname);
  }

  saveComment() {
    if (!this.newComment.content) {
      let config = new MatSnackBarConfig();
      config.duration = 3000;
      this.snackBar.open('댓글을 입력하세요.', null, config);
      return;
    }

    this.newComment.member_id = this.authService.getMemberId();
    this.newComment.news_id = this.news_id;

    console.log(this.newComment);
    this.userService.addComment(this.newComment)
      .subscribe(res => {
        if (res.body['result'] === 0) {
          this.newComment.content = null;
          this.getCommentList();
        }
      });
  }

  confirmDelete(comment: CommentVO) {
    let config = new MatDialogConfig();
    config.data = {content: '삭제하시겠습니까?'};
    let dialogRef = this.dialog.open(CommentDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // 삭제하기
        this.userService.removeComment(comment.comment_id)
          .subscribe(res => {
            if (res.body['result'] === 0) {
              this.getCommentList();
            }
          });
      }
    });
  }
}
