import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
