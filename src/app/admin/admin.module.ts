import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from "./admin-routing";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [AdminComponent, NewsComponent, HomeComponent]
})
export class AdminModule { }
