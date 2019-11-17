import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    console.log('Logout');
  }
}
