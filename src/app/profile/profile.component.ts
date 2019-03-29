import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  profile = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getProfile((profile, err) => {
      console.log(profile);
      this.profile = profile;
    });
  }
}
