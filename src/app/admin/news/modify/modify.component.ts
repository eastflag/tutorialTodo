import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsVO} from "../../../domain/news.vo";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../admin.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModifyComponent implements OnInit {
  news_id: number;
  news: NewsVO = new NewsVO();

  fileList: FileList;

  ckeditorConfig = {
    allowedContent: true,
    extraAllowedContent: '[id]',
    // protectedSource: /<i[^>]></i>*id/g,
    height: 500
  };

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let news_id = +params['news_id'];
      this.adminService.findOneNews(news_id)
        .then((res: NewsVO) => {
          this.news = res;
        });
    });
  }

  modifyNews() {
    this.adminService.modifyNews(this.news)
      .then(res => {
        if (res['result'] === 0) {
          this.router.navigate(['../..'], {relativeTo: this.route});
          let config = new MatSnackBarConfig();
          config.duration = 3000;
          this.snackBar.open('수정하였습니다.', null, config);
        }
      });
  }

  fileChange(event: any) {
    this.fileList = event.target.files;

    let reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
      this.imageUpload();
    };
  }

  imageUpload() {
    let formData: FormData = new FormData();

    if (this.fileList && this.fileList.length > 0) {
      let file: File = this.fileList[0];
      formData.append('file', file, file.name);
    }

    this.adminService.imageUpload(formData)
      .then(res => {
        if (res['result'] === 0) {
          // 이미지 경로를  editor에 추가한다.
          console.log(res['value']);
          if (this.news.content) {
            this.news.content += `<img src="http://www.javabrain.kr${res['value']}" style="max-width: 100%;">`;
          } else {
            this.news.content = `<img src="http://www.javabrain.kr${res['value']}" style="max-width: 100%;">`;
          }
        }
      });
  }

}
