import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: ProfileRoutingModule.components,
  imports: [SharedModule, ProfileRoutingModule]
})
export class PrfoileModule {}
