import { Router } from '@angular/router';
import { MaterialModule } from './material.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
dd:string;
user:string;
hide:boolean;

  title = 'app';
  constructor(public router: Router){
    if(localStorage.getItem('users')!=null){
    var data = JSON.parse(localStorage.getItem('users'));
    this.dd = data.username;
    this.user = data.usertype;
    this.hide = data.hide;
    }


    // if(this.IsLoggedIn){
    //   this.myVar = false;
    // }
    // else{
    //   this.myVar = true;
    // }
    
}
}
