import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsVO} from "../../domain/news.vo";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {

  news: NewsVO;
  html: SafeHtml;

  constructor(private userService: UserService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let news_id = +params['news_id'];
      this.userService.findOneNews(news_id)
        .subscribe((res: NewsVO) => {
          this.news = res;
          this.html = this.sanitizer.bypassSecurityTrustHtml(this.news.content);
        });
    });
  }
}
