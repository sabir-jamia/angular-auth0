import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrfoileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { CallBackModule } from './callback/callback.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    HomeModule,
    PublicModule,
    PrivateModule,
    PrfoileModule,
    CallBackModule,
    CourseModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
