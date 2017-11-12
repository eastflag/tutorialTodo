import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../admin.service";
import {NewsVO} from "../../../domain/news.vo";
import {PlatformLocation} from "@angular/common";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {
  news: NewsVO;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private location: PlatformLocation,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let news_id = +params['news_id'];
      this.adminService.findOneNews(news_id)
        .then((res: NewsVO) => {
          this.news = res;
        });
    });
  }


  gotoModify() {
    let path = this.location.pathname;
    this.router.navigateByUrl(path.replace('view', 'modify'));
  }
}
