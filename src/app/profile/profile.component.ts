import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfileModel } from "../shared/model/profile.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  profile: ProfileModel = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.profile = this.route.snapshot.data["profile"];
  }
}
