import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const token = JSON.parse(localStorage.getItem('token')) || false;
    if (token) {
      this.authService.getUserInfo(token).subscribe(item => console.log(item));
    }
  }

}
