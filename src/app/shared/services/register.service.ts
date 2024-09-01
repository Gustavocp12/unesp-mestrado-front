import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Register} from "../interfaces/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public register(name: string, phone: number, clinic: string, crmv: number, email: string, password: string) {
    return this.http.post<Register>(environment.api + '/createUser', { name, phone, clinic, crmv, email, password });
  }

}
