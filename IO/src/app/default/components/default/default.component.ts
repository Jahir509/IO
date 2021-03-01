import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isOpenRightSideBar = true;
  isOpenLeftSideBar = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleRightSideBar(): void {
    this.isOpenRightSideBar = !this.isOpenRightSideBar
  }

  toggleLeftSideBar(): void {
    this.isOpenLeftSideBar = !this.isOpenLeftSideBar
  }
}
