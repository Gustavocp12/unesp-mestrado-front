import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../shared/services/patients.service";
import {Patients} from "../../../shared/interfaces/patients";
import {Gender} from "../../../shared/enums/enums/global.enum";
import {ViacepService} from "../../../shared/services/viacep.service";
import {LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-existing-diagnosis',
  templateUrl: './existing-diagnosis.page.html',
  styleUrls: ['./existing-diagnosis.page.scss'],
})
export class ExistingDiagnosisPage implements OnInit {

  constructor(private patientsService: PatientsService,
              private viaCepService: ViacepService,
              private router: Router,
              private loadingController: LoadingController) { }

  patients: Patients[] = [];
  filteredPatients: Patients[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.getAllDiagnosticsByUserID();
  }

  filterPatients() {
    const searchLower = this.searchTerm.toLowerCase();

    this.filteredPatients = this.patients.filter(patient =>
      patient.name.toLowerCase().includes(searchLower)
    );
  }

  getAllDiagnosticsByUserID(){
    const userID = parseInt(localStorage.getItem('userID')!);

    this.patientsService.getAllDiagnosticByUserID(userID).subscribe((data: any) => {
      this.patients = data;
      this.filteredPatients = this.patients;
      this.loadAddress();
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

  patientAddresses: { [key: string]: string | null } = {};

  async loadAddress() {
    for (const patient of this.patients) {
      if (!this.patientAddresses[patient.IDP]) {
        this.patientAddresses[patient.IDP] = await this.cepToAddress(patient.cep, patient.IDP, patient.addressNumber);
      }
    }
  }

  async cepToAddress(cep: string, patientId: string, addressNumber: number | null): Promise<string | null> {
    if (this.patientAddresses[patientId]) {
      return this.patientAddresses[patientId];
    }

    const loading = await this.loadingController.create({ message: 'Carregando. . .' });
    await loading.present();

    return new Promise((resolve, reject) => {
      this.viaCepService.get(cep).subscribe(
        (data: any) => {
          loading.dismiss();
          this.patientAddresses[patientId] = `${data.logradouro}, ${addressNumber} - ${data.bairro} - Araçatuba/SP`;
          resolve(this.patientAddresses[patientId]);
        },
        (error) => {
          loading.dismiss();
          reject(error);
        }
      );
    });
  }

  goToDiagnostic(patientID: string){
    this.router.navigate(['tabs/home/diagnostics/' + patientID]);
  }

  goToEditPatient(patientID: string){
    this.router.navigate(['tabs/home/existing-diagnosis/edit-patients/' + patientID]);
  }

  protected readonly Gender = Gender;
}
