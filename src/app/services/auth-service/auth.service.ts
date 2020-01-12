import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from 'src/app/domain/interfaces/loginRequest.interface';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/domain/interfaces/user.interface';
import { SpinnerService } from '../spinner-service/spinner.service';
import { State } from 'src/app/state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/state/user/user.selector';
import { userLogout, userLogin, getCurrentUser, getToken } from 'src/app/state/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3004/auth';
  user: User;
  isAuth: boolean;

  constructor(private http: HttpClient, private spinnerService: SpinnerService, private store: Store<State>) { }

  login(user: LoginRequest): Observable<any> {
    return this.http.post<Observable<any>>(`${this.authUrl}/login`, user).pipe(
      tap((item) => {
        localStorage.setItem('token', JSON.stringify(item));
        this.store.dispatch(getToken({token: item}));
          // Math.random().toString(36).substr(2) if in future need to generate token
        return item;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(userLogout());
  }

  isAuthenticated() {
    return this.store.pipe(select(selectUser));
  }

  getUserInfo(token): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/userinfo`, token).pipe(
      tap((item: any) => {
        return item;
      })
    );
  }
}
