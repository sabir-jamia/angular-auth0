import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { PublicResolver } from './public.resolver';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    resolve: { public: PublicResolver }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PublicRoutingModule {
  static components = [PublicComponent];
}
