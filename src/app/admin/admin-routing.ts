import {Routes} from "@angular/router";
import {NewsComponent} from "./news/news.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {ViewComponent} from "./news/view/view.component";
import {WriteComponent} from "./news/write/write.component";
import {ModifyComponent} from "./news/modify/modify.component";

export const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'news', component: NewsComponent, children: [
      {path: 'view/:news_id', component: ViewComponent},
      {path: 'write', component: WriteComponent},
      {path: 'modify/:news_id', component: ModifyComponent},
    ]},
  ]}
];
