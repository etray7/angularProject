import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    this.authService.login({
      login: this.login,
      password: this.password,
    });
    console.log('Logged in successfully');
  }
}
