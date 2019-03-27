import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { throwIfAlreadyLoaded } from "./import.guard";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";
import { CallbackComponent } from "./callback/callback.component";

@NgModule({
  declarations: [NavComponent, CallbackComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
