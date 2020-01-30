import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showSidebar: Boolean;

  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    document.getElementById("page-top").style.backgroundColor = '#FFFFFF';
    this.showSidebar = false;
    this.validateCurrentUser();

  }

  showSideBarMethod() {
    if (this.showSidebar)
      this.showSidebar = false;
    else
      this.showSidebar = true;
  }

  logout() {
    this.router.navigate(["/"]);
  }

  validateCurrentUser() {
    if (!this.authenticationService.validateCurrentUser())
      this.router.navigate(["/"]);
  }
}
