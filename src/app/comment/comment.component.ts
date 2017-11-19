import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CommentVO} from "../domain/comment.vo";
import {AuthGuardService} from "../auth/auth-guard.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentComponent implements OnInit {
  // 부모가 news_id값을 바꾸면 업데이트하기 위해서 OnChanges 를 오버라이딩 해야한다.
  @Input()
  news_id: number;

  newComment: CommentVO = new CommentVO();
  commentList: Array<CommentVO >;

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
  }

  saveComment() {

  }

  confirmDelete(comment: CommentVO) {

  }
}
