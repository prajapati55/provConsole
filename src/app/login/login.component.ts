import { MaterialModule } from './../material.module';
import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public email: string;
  public password: string;
  public usertype: string;
  public hide:boolean;

  userData = {"email": "",  "password": "", "usertype":"", "username": "", "hide":""};
  
  constructor(private router: Router) {
    localStorage.clear();
  }

  public submit(){

    if(this.userData.email=="admin"&& this.userData.password=="admin"){
      this.userData.usertype= 'admin';
      this.userData.username= 'Vinod J';
      this.userData.hide= 'true';
      console.log(localStorage.setItem('users', JSON.stringify(this.userData)));   
      this.router.navigate(["home"]);
      
    }
    else if(this.userData.email=="client" && this.userData.password=="password"){
      this.userData.usertype = 'client';
      this.userData.username = 'Stanford';
      this.userData.hide= 'true';
      console.log(localStorage.setItem('users', JSON.stringify(this.userData)));
      this.router.navigate(["home"]);
      window.location.reload();
    
    }
  }
  
}

 