import { NgModule, Component } from '@angular/core';
import { CallbackComponent } from './callback.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'callback',
    children: [
      {
        path: '',
        component: CallbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CallbackRoutingModule {
  static components = [CallbackComponent];
}
