import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/interfaces/user.interface';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {

  @Input()
  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login-page');
    console.log('Logout');
  }
}
