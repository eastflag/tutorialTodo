import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {MemberVO} from "../../domain/member.vo";
import {UserService} from "../../user.service";
import {AuthGuardService} from "../auth-guard.service";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {ResultVO} from "../../domain/result.vo";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

declare var $: any ;
declare var postcodify: any;
const url = "//d1p7wdleee1q2z.cloudfront.net/post/search.min.js";

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

  public form: FormGroup;

  constructor(private snackBar: MatSnackBar, private userService: UserService, private authGuard: AuthGuardService
    , private router: Router, private fb: FormBuilder, public el: ElementRef) {
    this.config = new MatSnackBarConfig();
    this.config.duration = 3000;

    this.form = this.fb.group({
      nickname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      isTerm: new FormControl(null, [Validators.required]),
      isInfo: new FormControl(null, [Validators.required]),
      postcode: new FormControl(null),
      address: new FormControl(null),
      birthday: new FormControl(null),
    });
  }

  ngOnInit() {
    this.member = JSON.parse(localStorage.getItem('member'));

    $("#postcode").postcodifyPopUp();
  }

  register() {
    this.form.controls['postcode'].setValue($('.postcodify_postcode5').val());
    this.form.controls['address'].setValue($('.postcodify_address').val());

    if (!this.form.controls['isTerm'].value) {
      this.snackBar.open('이용약관에 동의하세요.', null, this.config);
      return;
    }

    if (!this.form.controls['isInfo'].value) {
      this.snackBar.open('개인정보이용에 동의하세요.', null, this.config);
      return;
    }

    if (!this.form.valid) {
      this.snackBar.open('필수입력 사항을 확인하세요.', null, {duration: 2000});
      return;
    }

    this.member.nickname = this.form.controls['nickname'].value;

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
