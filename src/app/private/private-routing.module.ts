import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { PrivateResolver } from './private.resolver';
import { AuthGuardService } from '../core/auth.guard';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuardService],
    resolve: { private: PrivateResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PrivateRoutingModule {
  static components = [PrivateComponent];
}
