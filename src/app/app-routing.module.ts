import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {HomeComponent} from "./home/home.component";
import {JqueryComponent} from "./jquery/jquery.component";
import {NgModule} from "@angular/core";
import {AngularComponent} from "./angular/angular.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {NicknameComponent} from "./nickname/nickname.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {NewsComponent} from "./news/news.component";
import {ViewComponent} from "./news/view/view.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  { path: '', component: IndexComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'jquery', component: JqueryComponent},
    { path: 'angular', component: AngularComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'nickname', component: NicknameComponent, canActivate: [AuthGuardService]},
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService]},
    { path: 'news', component: NewsComponent, children: [
      { path: 'view/:news_id', component: ViewComponent},
    ]},
  ]},
  // 참고: 향후 관리자 생성 모듈
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
