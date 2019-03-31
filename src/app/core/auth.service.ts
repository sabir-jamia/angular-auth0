import { Injectable } from "@angular/core";
import * as auth0 from "auth0-js";
import { environment } from "../../environments/environment";
import { SessionService } from "./session.service";
import { Router } from "@angular/router";
import { ProfileModel } from "../shared/model/profile.model";

const {
  auth0_domain,
  auth0_client_id,
  auth0_callback,
  auth0_audience
} = environment;

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userProfile: ProfileModel = null;

  auth0 = new auth0.WebAuth({
    domain: auth0_domain,
    clientID: auth0_client_id,
    redirectUri: auth0_callback,
    audience: auth0_audience,
    responseType: "token id_token",
    scope: "openid profile email"
  });

  constructor(private session: SessionService, private router: Router) {}

  login() {
    this.auth0.authorize();
  }

  authenticate() {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(["/home"]);
      } else if (error) {
        this.router.navigate(["/home"]);
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
    return new Date().getTime() > expiresAt ? false : true;
  }

  logout() {
    this.session.reset();
    this.auth0.logout({
      clientId: auth0_client_id,
      returnTo: "http://localhost:4200"
    });
  }

  getAccesstoken() {
    const accessToken = this.session.get("access_token");
    if (accessToken) {
      return accessToken;
    }

    throw new Error("No access token found");
  }

  getProfile(): Promise<ProfileModel> {
    if (this.userProfile) {
      return Promise.resolve(this.userProfile);
    }

    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(this.getAccesstoken(), (error, profile) => {
        if (error) {
          reject(error);
        }

        this.userProfile = {
          nickname: profile.nickname,
          picture: profile.picture
        };
        resolve(this.userProfile);
      });
    });
  }
}
