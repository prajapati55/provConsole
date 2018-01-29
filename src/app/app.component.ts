import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth/auth.service';
import { MaterialModule } from './material.module';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
dd:string;
user:string;
hide:boolean;
isLoggedIn$: Observable<boolean> | Promise<boolean> | boolean;
  title = 'app';
  constructor(public router: Router,private authService: AuthService) {
    // if (localStorage.getItem('users') !='' && localStorage.getItem('users') != null && JSON.parse(localStorage.getItem('users')) !== null) {
    //   var data = JSON.parse(localStorage.getItem('users'));
    //   this.dd = data.username;
    //   this.user = data.usertype;
    //   this.hide = data.hide;
    // }


    // if(this.IsLoggedIn){
    //   this.myVar = false;
    // }
    // else{
    //   this.myVar = true;
    // }

  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    this.isLoggedIn$.subscribe((logged: boolean) => {
      if (logged) {
        if (localStorage.getItem('users') != '' && localStorage.getItem('users') != null && JSON.parse(localStorage.getItem('users')) !== null) {
          var data = JSON.parse(localStorage.getItem('users'));
          this.dd = data.username;
          this.user = data.usertype;
          this.hide = data.hide;
        }
      }
    });
  }
  onLogout(){
    this.authService.logout();                      // {3}
  }  
}
