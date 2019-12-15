import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from 'src/app/domain/interfaces/loginRequest.interface';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/domain/interfaces/user.interface';
import { SpinnerService } from '../spinner-service/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3004/auth';
  loginCheck = new Subject();
  sub = this.loginCheck.asObservable();

  constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

  login(user: LoginRequest): Observable<any> {
    return this.http.post<Observable<any>>(`${this.authUrl}/login`, user).pipe(
      tap((item) => {
        localStorage.setItem('token', JSON.stringify(item));
          // Math.random().toString(36).substr(2) if in future need to generate token
        this.loginCheck.next(true);

        return item;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loginCheck.next(false);
  }

  isAuthenticated() {
    if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).token) {
      this.loginCheck.next(true);
      return true;
    }
    this.loginCheck.next(false);
    return false;
  }

  getUserInfo(token): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/userinfo`, token).pipe(
      tap((item: any) => {
        return item;
      })
    );
  }
}
