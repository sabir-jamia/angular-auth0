import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/auth.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authSubject$.subscribe(
      isAuth => (this.isAuthenticated = isAuth)
    );

    // if session expires and we reload a page
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login() {
    this.authService.login();
  }
}
