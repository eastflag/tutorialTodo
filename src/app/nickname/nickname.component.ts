import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {MemberVO} from "../domain/member.vo";
import {UserService} from "../user.service";
import {AuthGuardService} from "../auth/auth-guard.service";

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NicknameComponent implements OnInit {
  member: MemberVO;
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthGuardService,
              private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nickname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      member_id: null,
    });
  }

  ngOnInit() {
    this.userService.getMember(this.authService.getMemberId())
      .subscribe(resp => {
        console.log(resp);
        console.log(resp.headers.get('refresh_token'));
        this.form.patchValue(resp.body);

        localStorage.setItem('token', resp.headers.get('refresh_token'));
      });
  }

  modifyMember() {
    this.userService.modifyMember(this.form.value)
      .subscribe(resp => {
        if (resp.body.result === 0) {
          this.snackBar.open("수정되었습니다.", null, {duration: 2000});
        }
      });
  }
}
