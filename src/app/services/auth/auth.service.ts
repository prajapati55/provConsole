import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { RequestService } from '../request.service'
import { error } from 'util';
//import { UserData } from '../../model/user.model';

@Injectable()

export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    private userData = { usertype: '', username: '', hide: '' };
    get isLoggedIn() {

        let loginuserData = localStorage.getItem('users');
        if (loginuserData !== null) {
            this.loggedIn.next(true);
            return this.loggedIn.asObservable();
        }
        this.loggedIn.next(false);
        return this.loggedIn.asObservable();
    }

    constructor(private router: Router, private requestSer: RequestService) { }

    login(user: User) {
        if (user.username != '' && user.password != '') {
            this.requestSer.login(user)
                .subscribe(
                (response) => {
                    this.userData.username = response.username;
                    this.userData.usertype = (response.usertype) ? 'client' : 'admin';
                    this.userData.hide = 'true';
                    localStorage.setItem('users', JSON.stringify(this.userData));
                    this.loggedIn.next(true);
                    this.router.navigate(["home"]);
                },
                (error) => console.log('error', error)
                );
            // if (user.userName == "admin" && user.password == "admin") {
            //     this.userData.usertype = 'admin';
            //     this.userData.username = 'Vinod J';
            //     this.userData.hide = true;

            // }
            // else if (user.userName == "client" && user.password == "password") {
            //     this.userData.usertype = 'client';
            //     this.userData.username = 'Stanford';
            //     this.userData.hide = true;              

            // }
            // localStorage.setItem('users', JSON.stringify(this.userData));                       

        }

    }

    logout() {
        this.loggedIn.next(false);
        localStorage.setItem('users', null);
        this.router.navigate(['/login']);
    }
}