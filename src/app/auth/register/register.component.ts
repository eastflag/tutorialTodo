import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MemberVO} from "../../domain/member.vo";
import {UserService} from "../../user.service";
import {AuthGuardService} from "../auth-guard.service";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {ResultVO} from "../../domain/result.vo";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  member: MemberVO;
  isTerm = false;
  isInfo = false;
  config: MatSnackBarConfig;

  constructor(private snackBar: MatSnackBar, private userService: UserService, private authGuard: AuthGuardService
    , private router: Router) {
    this.config = new MatSnackBarConfig();
    this.config.duration = 3000;
  }

  ngOnInit() {
    this.member = JSON.parse(localStorage.getItem('member'));
  }

  register() {
    if (!this.member.nickname) {
      this.snackBar.open('닉네임을 입력하세요.', null, this.config);
      return;
    }

    if (!this.isTerm) {
      this.snackBar.open('이용약관에 동의하세요.', null, this.config);
      return;
    }

    if (!this.isInfo) {
      this.snackBar.open('개인정보이용에 동의하세요.', null, this.config);
      return;
    }

    this.userService.signUp(this.member)
      .then((res: ResultVO) => {
        if (res.result === 0) {
          localStorage.setItem('token', res.data['token']);

          // 페이지 리프레쉬
          if (this.authGuard.redirectUrl) {
            this.router.navigateByUrl(this.authGuard.redirectUrl);
          } else {
            this.router.navigateByUrl('/');
          }
        } else if (res.result === 100) {
          this.snackBar.open('닉네임이 중복입니다.', null, this.config);
        } else {
          this.snackBar.open('회원가입에 실패하였습니다.', null, this.config);
        }
      });
  }

}
