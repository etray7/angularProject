import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { SpinnerService } from './services/spinner-service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {

  isAuthenticated;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((item) => {
      if (item.user.fakeToken) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  ngAfterViewChecked() {
    this.spinnerService.isLoadingSubscriber.subscribe((item: boolean) => {
      this.isLoading = item;
      this.cdRef.detectChanges();
    });
  }
}
