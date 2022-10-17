import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckCookieComponent } from './check-cookie/check-cookie.component';
import {NativeCookieService} from "./native-cookie-service.service";
import { MainComponent } from './main/main.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CheckCookieComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NativeCookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
