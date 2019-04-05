import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { PrivateResolver } from './private.resolver';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    resolve: { private: PrivateResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PrivateRoutingModule {
  static components = [PrivateComponent];
}
