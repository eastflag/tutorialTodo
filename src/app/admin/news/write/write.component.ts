import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsVO} from "../../../domain/news.vo";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {AdminService} from "../../admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WriteComponent implements OnInit {
  news = new NewsVO();

  constructor(private snackBar: MatSnackBar, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    if (!this.news.title) {
      let config: MatSnackBarConfig = new MatSnackBarConfig();
      config.duration = 3000;
      this.snackBar.open('제목을 입력하세요.', null, config);
      return;
    }
    this.adminService.addNews(this.news)
      .then(res => {
        if (res['result'] === 0) {
          this.router.navigateByUrl('/admin/news');
        }
      });
  }
}
