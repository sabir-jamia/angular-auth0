import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth.guard';
import { ProfileResolver } from './profile.resolver';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    resolve: { profile: ProfileResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
  static components = [ProfileComponent];
}
