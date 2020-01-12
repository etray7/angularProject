import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/interfaces/user.interface';
import { State } from 'src/app/state';
import { Store } from '@ngrx/store';
import { userLogout } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {

  @Input()
  user: User;

  constructor(private authService: AuthService, private router: Router, private store: Store<State>) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login-page');
    console.log('Logout');
    this.store.dispatch(userLogout());
    console.log(this.store);
  }
}
