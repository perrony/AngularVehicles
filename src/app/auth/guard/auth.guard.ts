import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../token/token.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
   /*  private loggedService: LoggedService */
    ) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    /* && this.loggedService.isLoggedIn() */
    if (this.tokenService.getRefreshToken() ) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']).then(_ => false);
    return false;
  }


}
