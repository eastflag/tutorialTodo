import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberVO} from "../../domain/member.vo";
import {AuthGuardService} from "../auth-guard.service";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  private authSub: Subscription;

  member = new MemberVO();
  authState: Observable<firebase.User>;
  currentUser: firebase.User = null;

  naverUrl: string;

  constructor(public afAuth: AngularFireAuth, private router: Router, private authGuard: AuthGuardService,
              private userService: UserService, private route: ActivatedRoute) {
    this.authState = this.afAuth.authState;
  }

  ngOnInit() {
     this.authSub = this.authState.subscribe(user => {
      if (user) {
        // 로그인이 성공하면 호출 or 로그인 상태에서 다른 페이지 들어갔다가 들어와도 호출.
        this.currentUser = user;
        console.log(this.currentUser);
        // 소셜로그인 성공 후 서버에 인증 및 권한 획득한다.
        this.member.email = this.currentUser.email;
        this.member.photo_url = this.currentUser.photoURL;
        this.authGuard.login(this.member);
      } else {
        this.currentUser = null;
      }
    });

    // naver login url 얻기
    this.userService.getSocial("naver2")
      .subscribe(value => {
        this.naverUrl = value['url'];
      });

    // 로그인 결과의 토큰이 오는지 체크
    this.route.queryParams.subscribe(params => {
      let result = +params['result'];
      if (result === 0) { // 로그인 성공, 회원정보 있음
        console.log('login success:' + params['token']);
        localStorage.setItem('token', params['token']);
        if (this.authGuard.redirectUrl) {
          this.router.navigateByUrl(this.authGuard.redirectUrl);
        } else {
          this.router.navigateByUrl('/');
        }
      } else if (result === 100) { // 로그인 실패. 회원 정보 없음
        console.log('login fail');
        this.member.join_path = params['join_path'];
        this.member.email = params['email'];
        this.member.photo_url = params['photo_url'];
        localStorage.setItem('member', JSON.stringify(this.member));
        this.router.navigateByUrl('/register');
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.afAuth.auth.signOut();
  }

  signupWithPassword() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.member.email, this.member.pw)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  loginWithPassword() {
    this.afAuth.auth.signInWithEmailAndPassword(this.member.email, this.member.pw)
      .then(data => {
        console.log(data);
      });
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        console.log('signInWithPopup', data);
      });
  }
}
