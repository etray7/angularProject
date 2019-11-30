import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.authService.login({
      login: this.login,
      password: this.password,
    });
    this.router.navigateByUrl('/courses');
    console.log('Logged in successfully');
  }
}
