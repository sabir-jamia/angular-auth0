import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { throwIfAlreadyLoaded } from "./import.guard";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
  declarations: [NavComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, SpinnerComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
