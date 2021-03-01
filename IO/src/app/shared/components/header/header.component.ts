import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleRightSideBarStatus:EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() toggleLeftSideBarStatus:EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  toggleRightSideBar(): void {
    this.toggleLeftSideBarStatus.emit(true);
  }
  toggleLeftSideBar(): void {
    this.toggleRightSideBarStatus.emit(true);
  }
}
