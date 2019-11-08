import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { tap, delay } from 'rxjs/operators';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  sendToken(token: string, username:string) {
    localStorage.setItem("LoggedInUser", token)
    localStorage.setItem('loggedUser', username);
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("loggedUser");
    this.myRoute.navigate(["login"]);
  }
  // isLoggedIn = false;

  // // store the URL so we can redirect after logging in
  // redirectUrl: string;

  // login() {
  //   return this.isLoggedIn = true;
    
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }
}