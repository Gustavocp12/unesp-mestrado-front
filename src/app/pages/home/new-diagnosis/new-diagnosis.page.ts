import { Component, OnInit } from '@angular/core';
import {PatientData} from "../../../shared/interfaces/patients";
import {PatientsService} from "../../../shared/services/patients.service";
import {FunctionsService} from "../../../shared/services/functions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-diagnosis',
  templateUrl: './new-diagnosis.page.html',
  styleUrls: ['./new-diagnosis.page.scss'],
})
export class NewDiagnosisPage implements OnInit {

  showCalendar = false;
  emptyFields = true;
  patientData: PatientData = {
    name: '',
    birth: '',
    gender: '',
    cep: '',
    addressNumber: null
  }

  constructor(private patientsService: PatientsService, private functionsService: FunctionsService, private router: Router) { }

  ngOnInit() {
  }

  verifyFields() {
    if (this.patientData.name && this.patientData.birth && this.patientData.gender && this.patientData.cep && this.patientData.addressNumber) {
      this.emptyFields = false;
    }
  }

  selectDate(ev: any) {
    this.patientData.birth = `${ev.slice(8, 10)}/${ev.slice(5, 7)}/${ev.slice(0, 4)}`;

    this.verifyFields();
    this.showCalendar = false;
  }

  savePatientsAndNextPage() {
    this.patientsService.createPatient(
      this.patientData.name,
      this.patientData.birth,
      this.patientData.gender,
      this.patientData.cep,
      this.patientData.addressNumber).subscribe(() => {
      this.functionsService.toastAlert('top', 'Paciente cadastrado com sucesso!', 'success');
      this.router.navigate(['/home/new-diagnosis/patient-diagnosis']);
    })
  }

  openCalendar() {
    this.showCalendar = true;
  }

}
