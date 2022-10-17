import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckCookieComponent} from "./check-cookie/check-cookie.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'cookie',component:CheckCookieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
