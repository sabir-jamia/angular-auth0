import { Injectable } from "@angular/core";
import * as auth0 from "auth0-js";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { SessionService } from "./session.service";
import { BehaviorSubject } from "rxjs";

const { auth0_domain, auth0_client_id, auth0_callback } = environment;

@Injectable({
  providedIn: "root"
})
export class AuthService {
  auth0 = new auth0.WebAuth({
    domain: auth0_domain,
    clientID: auth0_client_id,
    redirectUri: auth0_callback,
    responseType: "token id_token",
    scope: "openid profile email"
  });

  authSubject = new BehaviorSubject<boolean>(null);

  authSubject$ = this.authSubject.asObservable();

  constructor(private session: SessionService) {}

  login() {
    this.auth0.authorize();
  }

  authenticate() {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.authSubject.next(true);
      } else if (error) {
        this.authSubject.next(false);
        alert(`Error: ${error.error}Check the console for furthur details`);
        console.log(error);
      }
    });
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    const items: Record<string, string> = {
      access_token: authResult.accessToken,
      id_token: authResult.idToken,
      expires_at: expiresAt
    };

    this.session.set(items);
  }

  isAuthenticated(): boolean {
    const expiresAt = JSON.parse(this.session.get("expires_at"));
    const isExpired = new Date().getTime() > expiresAt;
    if (isExpired) {
      this.authSubject.next(false);
      return false;
    }

    return true;
  }

  logout() {
    this.session.reset();
    this.authSubject.next(false);
  }
}
