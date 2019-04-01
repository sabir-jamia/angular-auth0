import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MessageResolved } from '../shared/model/message.model';
import { AuthService } from '../core/auth.service';
import { catchError } from 'rxjs/operators';

const { auth0_api } = environment;

@Injectable({
  providedIn: 'root'
})
export class PrivateResolver implements Resolve<any> {
  constructor(private http: HttpClient, private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MessageResolved> {
    return this.http
      .get<MessageResolved>(`${auth0_api}/private`, {
        headers: {
          Authorization: `Bearer ${this.authService.getAccesstoken()}`
        }
      })
      .pipe(catchError(error => this.handleError(error)));
  }

  handleError(error): Observable<MessageResolved> {
    const errorMessage = `Retrieval Error ${error.message}`;

    return of({
      message: null,
      error: errorMessage
    });
  }
}
