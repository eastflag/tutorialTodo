import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
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


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    HighlightDirective,
    MyDatePipe,
    LoginComponent
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
  ],
  providers: [UserService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
