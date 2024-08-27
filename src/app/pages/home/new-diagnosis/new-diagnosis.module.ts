import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDiagnosisPageRoutingModule } from './new-diagnosis-routing.module';

import { NewDiagnosisPage } from './new-diagnosis.page';
import {MaskDateDirective} from "../../../shared/directives/mask-date.directive";
import {MaskCepDirective} from "../../../shared/directives/mask-cep.directive";
import {PatientDataPageModule} from "./patient-data/patient-data.module";
import {PatientDiagnosisPageModule} from "./patient-diagnosis/patient-diagnosis.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDiagnosisPageRoutingModule,
    MaskDateDirective,
    MaskCepDirective,
    PatientDataPageModule,
    PatientDiagnosisPageModule
  ],
    exports: [],
    declarations: [NewDiagnosisPage]
})
export class NewDiagnosisPageModule {}
