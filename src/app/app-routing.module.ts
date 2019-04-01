import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuardService } from './core/auth.guard';
import { ProfileResolver } from './profile/profile.resolver';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { PublicResolver } from './public/public.resolver';
import { PrivateResolver } from './private/private.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    resolve: { profile: ProfileResolver }
  },
  { path: 'callback', component: CallbackComponent },
  {
    path: 'public',
    component: PublicComponent,
    resolve: { public: PublicResolver }
  },
  {
    path: 'private',
    component: PrivateComponent,
    resolve: {
      private: PrivateResolver
    },
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
