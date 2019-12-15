import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { SpinnerService } from './services/spinner-service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated = false;
  isLoading;

  constructor(private authService: AuthService, private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.sub.subscribe((value: boolean) => {
      this.isAuthenticated = value;
      console.log(this.isAuthenticated);
    });

    this.spinnerService.isLoadingSubscriber.subscribe((item: boolean) => {
      this.isLoading = item;
    });
  }
}
