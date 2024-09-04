import { Component, OnInit } from '@angular/core';
import {PatientData} from "../../../shared/interfaces/patients";
import {PatientsService} from "../../../shared/services/patients.service";
import {FunctionsService} from "../../../shared/services/functions.service";
import {Router} from "@angular/router";
import {ViacepService} from "../../../shared/services/viacep.service";
import {LoadingController} from "@ionic/angular";
import {Gender} from "../../../shared/enums/enums/global.enum";

@Component({
  selector: 'app-new-diagnosis',
  templateUrl: './new-diagnosis.page.html',
  styleUrls: ['./new-diagnosis.page.scss'],
})
export class NewDiagnosisPage implements OnInit {

  showCalendar = false;
  emptyFields = true;
  birthForSave: string = '';
  patientData: PatientData = {
    name: '',
    birth: '',
    gender: null,
    cep: '',
    addressNumber: null
  }
  address = {
    street: '',
    neighborhood: ''
  }

  constructor(private patientsService: PatientsService,
              private functionsService: FunctionsService,
              private router: Router,
              private loadingController: LoadingController,
              private viacepService: ViacepService) { }

  ngOnInit() {
  }

  verifyFields() {
    if (this.patientData.name && this.patientData.birth && this.patientData.gender && this.patientData.cep && this.patientData.addressNumber) {
      this.emptyFields = false;
    }
  }

  selectDate(ev: any) {
    this.patientData.birth = `${ev.slice(8, 10)}/${ev.slice(5, 7)}/${ev.slice(0, 4)}`;
    this.birthForSave = `${ev.slice(0, 4)}-${ev.slice(5, 7)}-${ev.slice(8, 10)}`;

    this.verifyFields();
    this.showCalendar = false;
  }

  async searchCep(): Promise<void> {

    if (this.patientData.cep.length !== 9) return;

    const loading = await this.loadingController.create({ message: 'Buscando cep . . .' });
    await loading.present();

    this.viacepService.get(this.patientData.cep).subscribe((resp: any) => {
      loading.dismiss();
      this.verifyCep(resp);
    });

  }

  verifyCep(resp: any) {
    if (resp.erro) {
      this.patientData.cep = '';
      this.functionsService.toastAlert('top', 'O cep informado é inválido!');
    }

    if (resp.localidade !== 'Araçatuba') {
      this.patientData.cep = '';
      this.functionsService.toastAlert('top', 'O cep informado não é de Araçatuba!');
    }

    if (resp.logradouro && resp.bairro){
      this.address.street = resp.logradouro;
      this.address.neighborhood = resp.bairro;
    }
  }

  savePatientsAndNextPage() {
    if (this.patientData.gender === null || this.patientData.addressNumber === null) return;
    this.patientData.cep = this.patientData.cep.replace('-', '');

    this.patientsService.createPatient(
      this.patientData.name,
      this.birthForSave,
      this.patientData.gender,
      this.patientData.cep,
      this.patientData.addressNumber).subscribe((res: any) => {
      this.functionsService.toastAlert('top', 'Paciente cadastrado com sucesso!', 'success');
      this.router.navigate([`tabs/home/diagnostics/` + res.insertId]);
    })
  }

  openCalendar() {
    this.showCalendar = true;
  }

  protected readonly Gender = Gender;
}
