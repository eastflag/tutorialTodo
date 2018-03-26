import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {AuthGuardService} from "../auth/auth-guard.service";
import {MemberVO} from "../domain/member.vo";
import {ChatVO} from "../domain/chat.vo";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  member: MemberVO;
  message: string;
  ws: WebSocket;

  constructor(private userService: UserService, private authService: AuthGuardService) {

  }

  ngOnInit() {
    this.userService.getMember(this.authService.getMemberId())
      .subscribe(body => {
        this.member = body;
        this.init();
      });
  }

  init() {
    this.ws = new WebSocket("ws://localhost:8080/api/chat");

    this.ws.onopen = () => {

    };

    this.ws.onmessage = (ev) => {
      console.log(ev.data);
      const chat: ChatVO = ev.data as ChatVO;

      if ("WhoAreYou" === chat.command) {
        this.ws.send(JSON.stringify({command: "IAmTom"}));
      } else if ("Receive" === chat.command) {
        console.log(chat.message);
      }
    };

    this.ws.onclose = () => {
      console.log('close');
    };
  }

  ngOnDestroy(): void {
    this.ws.close();
  }


  send() {
    this.ws.send(JSON.stringify({command: "Send", message: this.message}));
  }
}
