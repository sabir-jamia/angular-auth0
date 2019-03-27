import { Injectable } from "@angular/core";
import * as auth0 from "auth0-js";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {}

  login() {
    this.auth0.authorize();
  }

  handleAuthorization() {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(["/"]);
      } else if (error) {
        this.router.navigate(["/"]);
        alert(`Error: ${error.error}Check the console for furthur details`);
        console.log(error);
      }
    });
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
