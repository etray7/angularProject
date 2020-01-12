import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state';
import { getCurrentUser, getToken } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated: boolean;
  user;

  constructor(private authService: AuthService, private store: Store<State>) { }

  ngOnInit() {
    const token = JSON.parse(localStorage.getItem('token')) || false;
    if (token) {
      // this.store.dispatch(getToken({token}));
      // this.store.pipe(select(selectUser)).subscribe((item) => {
      //   console.log(item);
      //   this.user = item.user;
      //   this.store.dispatch(getCurrentUser({ user: item.user }));
      // });
      this.authService.getUserInfo(token).subscribe((item) => {
        this.user = item;
        this.store.dispatch(getCurrentUser({user: item}));
      });
    }
  }

}
