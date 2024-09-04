import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../shared/services/patients.service";
import {Patients} from "../../../shared/interfaces/patients";
import {Diagnosis, Gender} from "../../../shared/enums/enums/global.enum";
import {ViacepService} from "../../../shared/services/viacep.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-existing-diagnosis',
  templateUrl: './existing-diagnosis.page.html',
  styleUrls: ['./existing-diagnosis.page.scss'],
})
export class ExistingDiagnosisPage implements OnInit {

  constructor(private patientsService: PatientsService, private viaCepService: ViacepService) { }

  patients: Patients[] = [];

  ngOnInit() {
    this.getAllDiagnosticsByUserID();
  }

  getAllDiagnosticsByUserID(){
    const userID = parseInt(localStorage.getItem('userID')!);

    this.patientsService.getAllDiagnosticByUserID(userID).subscribe((data: any) => {
      this.patients = data;
      console.log(this.patients);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  dateToAge(dateString: string) {
    const birthDate = new Date(dateString);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const previousMonth = today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1;
      const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate();
      days += daysInPreviousMonth;
    }

    return `${years} anos, ${months} meses e ${days} dias`;
  }

  patientAddresses: { [key: string]: string } = {};

  cepToAddress(cep: string, patientId: string, addressNumber: number | null) {
    if (!this.patientAddresses[patientId]) {
      this.viaCepService.get(cep).subscribe((data: any) => {
        this.patientAddresses[patientId] = `${data.logradouro}, ${addressNumber} - ${data.bairro} - Araçatuba/SP`;
      });
    }
    return this.patientAddresses[patientId];
  }

  protected readonly Diagnosis = Diagnosis;
  protected readonly Gender = Gender;
}
