import { Component } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  loading = false;

  title = "angular-auth0";

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) =>
      this.checkRouterEvents(routerEvent)
    );
  }

  checkRouterEvents(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      console.log("start");
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      console.log("end");
      this.loading = false;
    }
  }
}
