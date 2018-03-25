///<reference path="../../../node_modules/@angular/common/http/src/response.d.ts"/>
import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {CommentVO} from "../domain/comment.vo";
import {AuthGuardService} from "../auth/auth-guard.service";
import {UserService} from "../user.service";
import {PlatformLocation} from "@angular/common";
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {ResultVO} from "../domain/result.vo";
import {CommentDialogComponent} from "./comment.dialog.component";
import {MemberVO} from "../domain/member.vo";

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
  member: MemberVO;

  newComment: CommentVO = new CommentVO();
  commentList: Array<CommentVO>;

  constructor(private userService: UserService, public authService: AuthGuardService,
              private location: PlatformLocation, private snackBar: MatSnackBar, private dialog: MatDialog) {
    const member_id = this.authService.getMemberId();
    if (member_id) {
      this.userService.getMember(member_id)
        .subscribe(body => this.member = body);
    }
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
    // 로그인 체크
    this.authService.checkLogin(this.location.pathname);
  }

  saveComment() {
    if (!this.newComment.content) {
      this.snackBar.open('댓글을 입력하세요.', null, {duration: 2000});
      return;
    }

    this.newComment.member_id = this.authService.getMemberId();
    this.newComment.news_id = this.news_id;

    console.log(this.newComment);
    this.userService.addComment(this.newComment)
      .subscribe(res => {
        console.log(res);
        if (res.body['result'] === 0) {
          this.newComment.content = null;
          if (res.headers.get('refresh_token')) {
            localStorage.setItem('token', res.headers.get('refresh_token'));
          }
          // refresh_token은 헤더에 존재하나 null로 찍힘.
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
