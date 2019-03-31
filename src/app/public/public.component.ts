import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"]
})
export class PublicComponent implements OnInit {
  message = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.message = this.route.snapshot.data.public.message;
  }
}
