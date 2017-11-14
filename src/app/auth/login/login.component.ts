import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {MemberVO} from "../../domain/member.vo";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  member = new MemberVO();
  authState: Observable<firebase.User>;
  currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        // 로그인이 성공하면 호출 or 로그인 상태에서 다른 페이지 들어갔다가 들어와도 호출.
        this.currentUser = user;
        console.log(this.currentUser);
        // 소셜로그인 성공 후 서버에 인증 및 권한 획득한다.
      } else {
        this.currentUser = null;
      }
    });
  }

  ngOnInit() {
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
