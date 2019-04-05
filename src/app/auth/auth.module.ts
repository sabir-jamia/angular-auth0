import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: AuthRoutingModule.components,
  imports: [AuthRoutingModule, MaterialModule, SharedModule]
})
export class AuthModule {}
