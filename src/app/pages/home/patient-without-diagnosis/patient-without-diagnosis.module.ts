import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientWithoutDiagnosisPageRoutingModule } from './patient-without-diagnosis-routing.module';

import { PatientWithoutDiagnosisPage } from './patient-without-diagnosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientWithoutDiagnosisPageRoutingModule
  ],
  declarations: [PatientWithoutDiagnosisPage]
})
export class PatientWithoutDiagnosisPageModule {}
