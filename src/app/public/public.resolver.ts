import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Message } from "../shared/model/message.model";

const { auth0_api } = environment;

@Injectable({
  providedIn: "root"
})
export class PublicResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Message> {
    return this.http.get<Message>(`${auth0_api}/public`);
  }
}
