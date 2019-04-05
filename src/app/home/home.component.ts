import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.router.navigate(['/login']);
    // this.authService.login();
  }
}
