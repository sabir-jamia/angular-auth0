import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule, MaterialModule]
})
export class HomeModule {}
