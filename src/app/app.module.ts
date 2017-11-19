import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AngularComponent } from './angular/angular.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';
import {MyDatePipe} from './my.date.pipe';
import { LoginComponent } from './auth/login/login.component';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AuthGuardService} from "./auth/auth-guard.service";
import { RegisterComponent } from './auth/register/register.component';
import { NicknameComponent } from './nickname/nickname.component';
import { NewsComponent } from './news/news.component';
import { ViewComponent } from './news/view/view.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    HighlightDirective,
    MyDatePipe,
    LoginComponent,
    RegisterComponent,
    NicknameComponent,
    NewsComponent,
    ViewComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  providers: [UserService, AngularFireAuth, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
