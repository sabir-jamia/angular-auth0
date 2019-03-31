import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrfoileModule } from "./profile/profile.module";
import { HomeModule } from "./home/home.module";
import { CoreModule } from "./core/core.module";
import { CallBackModule } from "./callback/callback.module";
import { PublicComponent } from "./public/public.component";
import { HttpClientModule } from "@angular/common/http";
import { PrivateComponent } from './private/private.component';

@NgModule({
  declarations: [AppComponent, PublicComponent, PrivateComponent],
  imports: [
    CoreModule,
    BrowserModule,
    HomeModule,
    PrfoileModule,
    CallBackModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
