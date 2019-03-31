import { NgModule } from "@angular/core";
import { CallbackComponent } from "./callback.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CallbackComponent],
  imports: [SharedModule]
})
export class CallBackModule {}
