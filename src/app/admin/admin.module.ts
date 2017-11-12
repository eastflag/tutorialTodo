import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from "./admin-routing";
import {MatButtonModule, MatCardModule, MatPaginatorModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminService} from "./admin.service";
import { WriteComponent } from './news/write/write.component';
import { ViewComponent } from './news/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  declarations: [AdminComponent, NewsComponent, HomeComponent, WriteComponent, ViewComponent],
  providers: [AdminService]
})
export class AdminModule { }
