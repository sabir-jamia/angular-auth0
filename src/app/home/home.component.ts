import { Component } from "@angular/core";
import { AuthService } from "../core/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
