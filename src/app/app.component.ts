import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated = false;

  constructor(private authService: AuthService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.sub.subscribe((value: boolean) => {
      this.isAuthenticated = value;
      console.log(this.isAuthenticated);
    });
  }
}
