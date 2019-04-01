import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { CourseResolved } from './course.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

const { auth0_api } = environment;

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<CourseResolved> {
  constructor(private http: HttpClient, private authService: AuthService) {}

  resolve(): Observable<CourseResolved> {
    return this.http
      .get<CourseResolved>(`${auth0_api}/courses`, {
        headers: {
          Authorization: `Bearer ${this.authService.getAccesstoken()}`
        }
      })
      .pipe(catchError(error => this.handleError(error)));
  }

  handleError(error): Observable<CourseResolved> {
    const errorMessage = `Retrieval Error ${error.message}`;

    return of({
      courses: null,
      error: errorMessage
    });
  }
}
