import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
