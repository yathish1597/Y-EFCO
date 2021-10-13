import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrsGuard implements CanActivate {
  constructor(private router : Router) { }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var userdata = JSON.parse(localStorage.getItem('User'));
    // let permissionId = next.data["permissionId"];
    if(true)
      return true;
    else 
      return false;
  }
}
