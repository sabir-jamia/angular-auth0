import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.scss"]
})
export class CallbackComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const hash = this.route.snapshot.fragment;
    if (/access_token|id_token|error/.test(hash)) {
      this.authService.authenticate();
      this.router.navigate(["/"]);
    } else {
      throw new Error("Invalid callback URL");
    }
  }
}
