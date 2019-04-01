import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ProfileModel } from '../shared/model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<ProfileModel> {
  constructor(private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<ProfileModel> {
    return this.authService.getProfile();
  }
}
