import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsVO} from "../../domain/news.vo";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {

  news: NewsVO;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let news_id = +params['news_id'];
      this.userService.findOneNews(news_id)
        .subscribe((res: NewsVO) => {
          this.news = res;
        });
    });
  }
}
