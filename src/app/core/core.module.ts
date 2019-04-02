import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './import.guard';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent,
    SideNavComponent,
    ToolbarComponent,
    MainContentComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SideNavComponent, SpinnerComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
