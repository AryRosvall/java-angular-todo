import { state } from '@angular/animations';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private hardCodedService: HardcodedAuthenticationService, private router: Router) { }

  canActivateFn() {

    if (this.hardCodedService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }
}
//route: ActivatedRouteSnapshot, state: RouterStateSnapshot
export const isRouteGuard: CanActivateFn = (): boolean => {
  return inject(RouteGuardService).canActivateFn();
}
