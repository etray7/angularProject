import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/domain/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getUserInfo(JSON.parse(localStorage.getItem('token'))).pipe(
      map((user: User) => {
        if (user) {
          return true;
        }
      }),
      catchError(() => {
        this.router.navigateByUrl('/login-page');
        return of(false);
      })
    );
  }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
