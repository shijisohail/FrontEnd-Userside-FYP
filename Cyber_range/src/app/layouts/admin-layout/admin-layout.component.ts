import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor = 'red';
// public boolean; isLoggedIn;
  isLoggedIn = false;
  constructor(private route: Router) {
  }
  checklogin() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {

      // not logged in so redirect to login page with the return url
      this.route.navigate(['/login']);
      this.isLoggedIn = false;
    }
  }
  changeSidebarColor(color) {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;


    if (sidebar !== undefined) {
        sidebar.setAttribute('data', color);
    }

    if (mainPanel !== undefined) {
        mainPanel.setAttribute('data', color);
    }
  }
  changeDashboardColor(color) {
    const body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    } else if (body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
    this.checklogin();
  }
}
