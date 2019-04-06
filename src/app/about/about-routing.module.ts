import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'about/:id', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AboutRoutingModule {
  static components = [AboutComponent];
}
