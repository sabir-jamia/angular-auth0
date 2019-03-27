import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  sessionKeys = ["access_token", "id_token", "expires_at"];

  constructor() {}

  set(items: Record<string, string>): void {
    this.sessionKeys.map(key => localStorage.setItem(key, items[key]));
  }

  get(key: string): string {
    return localStorage.getItem(key);
  }

  reset() {
    this.sessionKeys.map(key => localStorage.removeItem(key));
  }
}
