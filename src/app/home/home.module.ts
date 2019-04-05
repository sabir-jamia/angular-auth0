import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: HomeRoutingModule.components,
  imports: [SharedModule, MaterialModule, HomeRoutingModule]
})
export class HomeModule {}
