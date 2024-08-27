import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientDiagnosisPageRoutingModule } from './patient-diagnosis-routing.module';

import { PatientDiagnosisPage } from './patient-diagnosis.page';
import {MaskCepDirective} from "../../../../shared/directives/mask-cep.directive";
import {MaskDateDirective} from "../../../../shared/directives/mask-date.directive";
import {PatientDataPageModule} from "../patient-data/patient-data.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientDiagnosisPageRoutingModule,
    MaskCepDirective,
    MaskDateDirective,
    PatientDataPageModule
  ],
  exports: [
    PatientDiagnosisPage
  ],
  declarations: [PatientDiagnosisPage]
})
export class PatientDiagnosisPageModule {}
