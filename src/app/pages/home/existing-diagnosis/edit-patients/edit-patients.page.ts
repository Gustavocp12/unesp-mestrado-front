import { Component, OnInit } from '@angular/core';
import {PatientData} from "../../../../shared/interfaces/patients";
import {PatientsService} from "../../../../shared/services/patients.service";
import {FunctionsService} from "../../../../shared/services/functions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {ViacepService} from "../../../../shared/services/viacep.service";
import {Gender} from "../../../../shared/enums/enums/global.enum";

@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.page.html',
  styleUrls: ['./edit-patients.page.scss'],
})
export class EditPatientsPage implements OnInit {

  showCalendar = false;
  emptyFields = true;
  birthForSave: string = '';
  idUrl: any;
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
              private Router: ActivatedRoute,
              private loadingController: LoadingController,
              private viacepService: ViacepService) { }

  ngOnInit() {
    this.getIdUrl();
  }

  getIdUrl(){
    this.idUrl = this.Router.snapshot.paramMap.get('id');
    this.getPatient();
  }

  getPatient() {
    this.patientsService.getPatientById(this.idUrl).subscribe((resp: any) => {
      this.patientData = {
        name: resp[0].name,
        birth: this.formatDate(resp[0].birth),
        gender: resp[0].gender,
        cep: this.initializeCep(resp[0].cep),
        addressNumber: resp[0].addressNumber
      }

      this.birthForSave = this.formatDateForSave(this.patientData.birth);

      this.searchCep();
      this.verifyFields();
    });
  }

  formatDateForSave(date: string): string {
    const day = date.slice(0, 2);
    const month = date.slice(3, 5);
    const year = date.slice(6, 10);

    return `${year}-${month}-${day}`;
  }

  initializeCep(cep: any): string {
    const cepString = typeof cep === 'number' ? cep.toString() : cep;

    if (typeof cepString === 'string' && cepString.length >= 8) {
      return cepString.slice(0, 5) + '-' + cepString.slice(5, 8);
    }

    return 'CEP inválido';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
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

  openCalendar() {
    this.showCalendar = true;
  }

  save() {
    if (this.patientData.gender === null || this.patientData.addressNumber === null) return;
    this.patientData.cep = this.patientData.cep.replace('-', '');

    this.patientsService.putPatient(
      this.patientData.name,
      this.birthForSave,
      this.patientData.gender,
      this.patientData.cep,
      this.patientData.addressNumber,
      this.idUrl).subscribe(() => {
        this.functionsService.toastAlert('top', 'Paciente atualizado com sucesso!', 'success');
        this.router.navigate(['tabs/home']);
    })
  }


  protected readonly Gender = Gender;
}
