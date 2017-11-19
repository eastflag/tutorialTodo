import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsVO} from "../domain/news.vo";
import {PageVO} from "../domain/page.vo";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {ResultVO} from "../domain/result.vo";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  newsList: Array<NewsVO>;

  page = new PageVO(0, 5);

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.getNewsList();
  }

  getNewsList() {
    let params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    };
    this.userService.findNews(params)
      .subscribe((res: ResultVO) => {
        this.newsList = res.data;
        this.page.totalCount = res.total;
      });
  }

  pageChanged(event: any) {
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.getNewsList();
  }

  gotoView(news: NewsVO) {
    this.router.navigateByUrl(`/news/view/${news.news_id}`);
  }

}
