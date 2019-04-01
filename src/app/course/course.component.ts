import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseResolved } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data: CourseResolved = this.route.snapshot.data.courses;
    this.courses = data.error ? [] : data.courses;
  }
}
