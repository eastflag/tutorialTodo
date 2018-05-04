import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot
} from "@angular/router";
import {UserService} from "../user.service";
import {AngularFireAuth} from "angularfire2/auth";
import {MemberVO} from "../domain/member.vo";
import {ResultVO} from "../domain/result.vo";
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  private jwtHelper: JwtHelper;
  redirectUrl: string;

  private authSource = new Subject<boolean>();

  public authSource$: Observable<boolean> = this.authSource.asObservable();

  constructor(private router: Router, private userService: UserService,  public afAuth: AngularFireAuth) {
    this.jwtHelper = new JwtHelper();
    // 초기화: 모든 컴포넌트가 생성된 후에 초기 데이터를 보낸다.
    setTimeout(() => this.authSource.next(this.isAuthenticated()), 1000);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAdmin()) {
      return true;
    }

    this.redirectUrl = '/admin';
    this.router.navigateByUrl('/login');
    return false;
  }

  checkLogin(url: string): boolean {
    let token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.authSource.next(true);
      return true;
    } else {
      this.redirectUrl = url;
      this.router.navigateByUrl('/login');
      this.authSource.next(false);
      return false;
    }
  }

  isAdmin() {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      if (this.jwtHelper.decodeToken(token).sub.indexOf('admin') >= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getMemberId(): number {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // console.log(this.jwtHelper.decodeToken(token));
      return +(this.jwtHelper.decodeToken(token).jti);
    } else {
      return 0;
    }
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // console.log(this.jwtHelper.decodeToken(token));
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    // 스토리지에 저장된 토큰 정보와 인증 정보를 삭제
    localStorage.removeItem('token');
    this.afAuth.auth.signOut();
    this.redirectUrl = null;
    this.authSource.next(false);
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
