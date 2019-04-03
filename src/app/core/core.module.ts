import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './import.guard';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [MainContentComponent, ToolbarComponent, MainContentComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MainContentComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
