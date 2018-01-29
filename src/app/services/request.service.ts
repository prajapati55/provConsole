import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from './auth/user';
@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  login(user: User) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = `username=${user.username}&password=${user.password}`;
    return this.http.post('http://tachetechnologies.com/provconsole/consoleapi/login.php',
    body,
      { headers: headers }).map((res:Response)=>{
            const data = res.json();
            return data;
      });
  }

  register(user: any) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    return this.http.post('http://tachetechnologies.com/provconsole/consoleapi/login.php',
      body,
      { headers: headers });
  }
}