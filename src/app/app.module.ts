import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule,
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';
import {MyDatePipe} from './my.date.pipe';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AuthGuardService} from "./auth/auth-guard.service";
import { RegisterComponent } from './auth/register/register.component';
import { NicknameComponent } from './nickname/nickname.component';
import { NewsComponent } from './news/news.component';
import { ViewComponent } from './news/view/view.component';
import { CommentComponent } from './comment/comment.component';
import {CommentDialogComponent} from "./comment/comment.dialog.component";
import { ChatComponent } from './chat/chat.component';
import {LoginDialogComponent} from "./auth/login/login.dialog.component";
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    HighlightDirective,
    MyDatePipe,
    LoginDialogComponent,
    RegisterComponent,
    NicknameComponent,
    NewsComponent,
    ViewComponent,
    CommentComponent,
    CommentDialogComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [UserService, AngularFireAuth, AuthGuardService],
  entryComponents: [LoginDialogComponent, CommentDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
