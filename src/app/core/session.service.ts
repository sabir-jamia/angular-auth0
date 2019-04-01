import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionKeys = ['access_token', 'id_token', 'expires_at', 'scopes'];

  constructor() {}

  set(items: Record<string, string>): void {
    this.sessionKeys.map(key => sessionStorage.setItem(key, items[key]));
  }

  get(key: string): string {
    return sessionStorage.getItem(key);
  }

  reset() {
    this.sessionKeys.map(key => sessionStorage.removeItem(key));
  }
}
