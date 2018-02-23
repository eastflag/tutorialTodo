import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
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

  fileList: FileList;

  // @ViewChild('newFile')
  // newFile: any;

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

  fileChange(event: any) {
    this.fileList = event.target.files;
    console.log(this.fileList);
    // show thumbnail
    let reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
      // this.thumbnailSrc = reader.result;
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
