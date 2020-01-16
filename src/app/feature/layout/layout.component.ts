import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showSidebar: Boolean;

  constructor() {
    document.getElementById("page-top").style.backgroundColor = '#FFFFFF';
    this.showSidebar = false;
  }

  ngOnInit() {
  }

  showSideBarMethod() {
    if (this.showSidebar)
      this.showSidebar = false;
    else
      this.showSidebar = true;
  }
}
