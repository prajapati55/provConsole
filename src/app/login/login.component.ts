import { MaterialModule } from './../material.module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router, RouterModule} from "@angular/router";
import { AuthService } from '../services/auth/auth.service';
import { User } from '../services/auth/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthService, // {4}D
  ) { 
    this.authService.logout(); 
   }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public onSubmit(){

    // if(this.userData.email=="admin"&& this.userData.password=="admin"){
    //   this.userData.usertype= 'admin';
    //   this.userData.username= 'Vinod J';
    //   this.userData.hide= 'true';
    //   console.log(localStorage.setItem('users', JSON.stringify(this.userData)));   
    //   this.router.navigate(["home"]);
      
    // }
    // else if(this.userData.email=="client" && this.userData.password=="password"){
    //   this.userData.usertype = 'client';
    //   this.userData.username = 'Stanford';
    //   this.userData.hide= 'true';
    //   console.log(localStorage.setItem('users', JSON.stringify(this.userData)));
    //   this.router.navigate(["home"]);
    //   window.location.reload();
    
    // }
    if (this.form.valid) {
      this.authService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true; 
  }
  
}

 