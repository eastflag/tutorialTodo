import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {AngularFireAuth} from "angularfire2/auth";
import {MemberVO} from "../domain/member.vo";
import {ResultVO} from "../domain/result.vo";

@Injectable()
export class AuthGuardService {
  // private jwtHelper: JwtHelper;
  redirectUrl: string;

  constructor(private router: Router, private userService: UserService,  public afAuth: AngularFireAuth) {
    // this.jwtHelper = new JwtHelper();
  }

  logOut() {
    // 스토리지에 저장된 토큰 정보와 인증 정보를 삭제
    localStorage.removeItem('token');
    this.afAuth.auth.signOut();
    this.redirectUrl = null;
    this.router.navigateByUrl('/');
  }

  login(member: MemberVO) {
    this.userService.login(member)
      .then((res: ResultVO) => {
        if (res.result === 0) {
          // 로그인 성공. 서버에서 받은 토큰 정보를 스토리지에 저장.
          localStorage.setItem('token', res.data['token']);
          if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
          } else {
            this.router.navigateByUrl('/');
          }
        } else if (res.result === 100) {  // email does not exist
          // 서버에 정보가 없으므로 회원추가 페이지로 이동.
          this.router.navigateByUrl('/register');
          localStorage.setItem('member', JSON.stringify(member));
        }

      });
  }

}
