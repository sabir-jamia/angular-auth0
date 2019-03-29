import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { CallbackComponent } from "./core/callback/callback.component";
import { AuthGuardService } from "./core/guard/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: "callback", component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
