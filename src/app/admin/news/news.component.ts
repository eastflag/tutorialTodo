import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageVO} from "../../domain/page.vo";
import {AdminService} from "../admin.service";
import {NewsVO} from "../../domain/news.vo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  page: PageVO = new PageVO(0, 5);
  newsList: Array<NewsVO>;
  selectedNews: NewsVO;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    console.log('news init');
    this.getNewsList();
  }


  getNewsList() {
    let params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    };
    this.adminService.findNews(params)
      .then(res => {
        console.log(res);
        this.newsList = res['data'];
        this.page.totalCount = res['total'];
      });
  }

  pageChanged(event: any) {
    console.log(event);
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.getNewsList();
  }

  gotoView(news: NewsVO) {
    this.selectedNews = news;
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
  }

}
