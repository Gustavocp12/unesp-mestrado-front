import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PatientData, PatientDiagnosis} from "../interfaces/patients";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  public createPatient(name: string, birth: string, gender: number, cep: string, addressNumber: number) {
    return this.http.post<PatientData>(environment.api + '/createPatient', { name, birth, gender, cep, addressNumber });
  }

  public createPatientDiagnosis(diagnosis: number, diagnosisType: number, clinicalSigns: string, IDP: number, IDU: number) {
    return this.http.post<PatientDiagnosis>(environment.api + '/createDiagnostic', { diagnosis, diagnosisType, clinicalSigns, IDP, IDU });
  }

  public getDiagnosticByPatientId(id: number) {
    return this.http.get(environment.api + '/diagnostics/' + id);
  }

  public putDiagnostic(diagnosis: number, diagnosisType: number, clinicalSigns: string, IDP: number) {
    return this.http.put(environment.api + '/putDiagnostic/' + IDP, { diagnosis, diagnosisType, clinicalSigns });
  }

  public getAllDiagnosticByUserID(IDU: number) {
    return this.http.get(environment.api + '/findAllDiagnosticByUserID/' + IDU);
  }

}
