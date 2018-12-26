import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {PageVO} from "../../domain/page.vo";
import {AdminService} from "../admin.service";
import {NewsVO} from "../../domain/news.vo";
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit, OnDestroy {
  page: PageVO = new PageVO(0, 5);
  newsList: Array<NewsVO>;
  selectedNews: NewsVO;
  subscription: Subscription;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    console.log('news init');

    // 뉴스 목록이 업데이트 되었는지 관찰한다.
    this.subscription = this.adminService.refresh$.subscribe(data => {
      if (data) {
        this.getNewsList();
      }
    });

    this.getNewsList();

    // 글쓰기, 삭제 수정을 마치고 돌아오면 목록을 리프레쉬해야 한다.
    // Subject 객체를 Service에 두고 리프레쉬하는것으로 변경함.
/*    this.router.events.subscribe(events => {
      // 부모, 자식 경로가 호출될때마다 여러가지 이벤트 발생. NavigationStart -> NavigationReconized -> NavigationEnd
      if (events instanceof NavigationStart) {
        console.log('nagigation start:' + events.url);
        if (events.url === '/admin/news') {
          this.getNewsList();
        }
      }
    });*/
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

  gotoWrite() {
    this.router.navigateByUrl(`/admin/news/write`);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
