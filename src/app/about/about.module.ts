import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: AboutRoutingModule.components,
  imports: [MaterialModule, AboutRoutingModule]
})
export class AboutModule {}
