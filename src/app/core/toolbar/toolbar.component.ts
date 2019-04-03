import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter(null);

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
