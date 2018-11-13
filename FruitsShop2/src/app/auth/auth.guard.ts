import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.loginService.redirectUrl = url;

    this.router.navigate(['Login']);
    return false;
  }
}
