import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private isAuthenticated: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login() {
    this.authService.login();
  }
}
