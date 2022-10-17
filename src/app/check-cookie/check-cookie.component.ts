import { Component, OnInit } from '@angular/core';
import {NativeCookieService} from "../native-cookie-service.service";

@Component({
  selector: 'app-check-cookie',
  templateUrl: './check-cookie.component.html',
  styleUrls: ['./check-cookie.component.scss']
})
export class CheckCookieComponent implements OnInit {
  user: string | undefined;

  constructor(public cookie: NativeCookieService) {}

  ngOnInit() {
    this.user = this.cookie.getCookie('user');
  }

}
