import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginCheck = new Subject();
  sub = this.loginCheck.asObservable();

  constructor() { }

  login(user): any {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(Math.random().toString(36).substr(2)));
    this.loginCheck.next(true);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.loginCheck.next(false);
  }

  isAuthenticated() {
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).login) {
      this.loginCheck.next(true);
      return true;
    }
    this.loginCheck.next(false);
    return false;
  }

  getUserInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.loginCheck.next(user.login);
    return user.login;
  }
}
