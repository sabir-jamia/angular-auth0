import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CallbackRoutingModule } from './callback-routing.module';

@NgModule({
  declarations: CallbackRoutingModule.components,
  imports: [SharedModule, CallbackRoutingModule]
})
export class CallBackModule {}
