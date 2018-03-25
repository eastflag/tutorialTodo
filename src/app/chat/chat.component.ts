import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  ws: WebSocket;

  constructor() { }

  ngOnInit() {
    this.ws = new WebSocket("ws://localhost:8080/api/chat");

    this.ws.onopen = () => {
      this.ws.send("send");
    };

    this.ws.onmessage = (ev) => {
      console.log(ev.data);
    };

    this.ws.onclose = () => {
      console.log('close');
    };
  }

  ngOnDestroy(): void {
    this.ws.close();
  }

}
