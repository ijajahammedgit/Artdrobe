import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../interface/user-details';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  // private isLoggedInSource = new BehaviorSubject<boolean>(false);

  // public _isLoggedIn: Observable<boolean> = this.isLoggedInSource.asObservable();

private isUserVerified : boolean =false;
private userDetails = new Subject<UserDetails>();

  constructor() {}

  set isLoggedIn(logged: boolean) {
    this.isUserVerified=logged;
  }

  get isLoggedIn() {
    return this.isUserVerified;
  }

  set setloginUser( user : UserDetails){
    //console.log('setuser', user);
    this.userDetails.next(user);
  }

  get getloginUser() : Observable<UserDetails>{
    return this.userDetails.asObservable();
  }

  logout() {
    this.isLoggedIn = false;
    this.userDetails.next();
    
  }

  login() {
    this.isLoggedIn = true;
  }

}
