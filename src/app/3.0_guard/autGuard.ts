import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    const key = sessionStorage.key(0);
    const codigoUsuarios = key ? sessionStorage.getItem(key) : null;
     if (codigoUsuarios) {
      return true;
    } else {

      return false;
    } 
  }
}
