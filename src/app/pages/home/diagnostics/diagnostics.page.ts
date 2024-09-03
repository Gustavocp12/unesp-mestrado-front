import { Component, OnInit } from '@angular/core';
import {PatientDiagnosis} from "../../../shared/interfaces/patients";
import {PatientsService} from "../../../shared/services/patients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FunctionsService} from "../../../shared/services/functions.service";

enum Diagnosis {
  POSITIVO = 1,
  NEGATIVO = 2,
  INCONCLUSIVO = 3
}

enum DiagnosisType {
  ELISA = 1,
  RIFI = 2,
  TESTE_RAPIDO = 3,
  CITOLOGIA = 4,
  PCR = 5
}

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.page.html',
  styleUrls: ['./diagnostics.page.scss'],
})
export class DiagnosticsPage implements OnInit {

  idUrl: any;
  patientDiagnostic: PatientDiagnosis = {
    diagnosis: null,
    diagnosisType: null,
    clinicalSigns: ''
  }
  emptyValues = true;
  putValues = false;

  constructor(private patientsService: PatientsService,
              private router: Router,
              private Router: ActivatedRoute,
              private functionsService: FunctionsService,) { }

  ngOnInit() {
    this.getIdUrl();
    this.verifyIfDiagnosticExists();
  }

  getIdUrl(){
    this.idUrl = this.Router.snapshot.paramMap.get('id');
  }

  verifyIfDiagnosticExists(){
    this.patientsService.getDiagnosticByPatientId(this.idUrl).subscribe((res: any) => {
      if (res.length > 0) {
        this.patientDiagnostic.diagnosis = res[0].diagnosis;
        this.patientDiagnostic.diagnosisType = res[0].diagnosisType;
        this.patientDiagnostic.clinicalSigns = res[0].clinicalSigns;
        this.emptyValues = false;
        this.putValues = true;
      }
    })
  }

  verifyValues(){
    this.emptyValues = !(this.patientDiagnostic.diagnosis !== null &&
      this.patientDiagnostic.diagnosisType !== null &&
      this.patientDiagnostic.clinicalSigns !== '');
  }

  save(){
    if (this.patientDiagnostic.diagnosis === null || this.patientDiagnostic.diagnosisType === null) return

    if (!this.putValues){
      this.patientsService.createPatientDiagnosis(
        this.patientDiagnostic.diagnosis,
        this.patientDiagnostic.diagnosisType,
        this.patientDiagnostic.clinicalSigns,
        this.idUrl).subscribe(() => {
        this.functionsService.toastAlert('top', 'Diagnóstico do paciente registrado com sucesso!', 'success');
        this.router.navigate(['tabs/home']);
      })
    }else{
      this.patientsService.putDiagnostic(
        this.patientDiagnostic.diagnosis,
        this.patientDiagnostic.diagnosisType,
        this.patientDiagnostic.clinicalSigns,
        this.idUrl).subscribe(() => {
        this.functionsService.toastAlert('top', 'Diagnóstico do paciente atualizado com sucesso!', 'success');
        this.router.navigate(['tabs/home']);
      })
    }
  }


  protected readonly Diagnosis = Diagnosis;
  protected readonly DiagnosisType = DiagnosisType;
}
