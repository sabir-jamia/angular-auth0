import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseResolver } from './course.resolver';
import { AuthGuardService } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'course',
    component: CourseComponent,
    canActivate: [AuthGuardService],
    resolve: { courses: CourseResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CourseRoutingModule {
  static components = [CourseComponent];
}
