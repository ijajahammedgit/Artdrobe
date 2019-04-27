import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {RestServiceService} from '../services/rest-service.service';
import { GlobalVariableService } from '../services/global-variable.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

userDetail : any;

  constructor(private userAuth: GlobalVariableService, private router: Router) { }



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {       
    if(this.userAuth.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['login']);
    return false;
    }
    }
}
