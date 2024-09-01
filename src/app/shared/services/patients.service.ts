import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PatientData} from "../interfaces/patients";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  public createPatient(name: string, birth: string, gender: string, cep: string, addressNumber: number | null) {
    return this.http.post<PatientData>(environment.api + '/createPatient', { name, birth, gender, cep, addressNumber });
  }
}
