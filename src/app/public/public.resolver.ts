import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { MessageResolved } from '../shared/model/message.model';

const { auth0_api } = environment;

@Injectable({
  providedIn: 'root'
})
export class PublicResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MessageResolved> {
    return this.http
      .get<MessageResolved>(`${auth0_api}/public`)
      .pipe(catchError(error => this.handleError(error)));
  }

  handleError(error: any): Observable<MessageResolved> {
    const errorMessage = `Retrieval Error ${error.message}`;
    return of({
      message: null,
      error: errorMessage
    });
  }
}
