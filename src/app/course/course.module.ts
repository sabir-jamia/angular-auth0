import { NgModule } from '@angular/core';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: CourseRoutingModule.components,
  imports: [SharedModule, CourseRoutingModule]
})
export class CourseModule {}
