import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Login} from "../interfaces/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  public isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  public login(email: string, password: string) {
    return this.http.post<Login>(environment.api + '/login', { email: email, password: password });
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    this.router.navigate(['/login']);
  }
}
