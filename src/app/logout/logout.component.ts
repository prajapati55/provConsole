import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent{

  constructor(public router:Router) {
    localStorage.setItem('isLoggedIn','F');
    localStorage.clear();
    this.router.navigate(["login"]);   
  }
  // ngOnInit() {
  // }
}
