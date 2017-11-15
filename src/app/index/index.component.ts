import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthGuardService} from "../auth/auth-guard.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(public authService: AuthGuardService) { }

  ngOnInit() {
  }

}
