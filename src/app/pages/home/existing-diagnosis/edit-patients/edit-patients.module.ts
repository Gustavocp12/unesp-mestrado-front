import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPatientsPageRoutingModule } from './edit-patients-routing.module';

import { EditPatientsPage } from './edit-patients.page';
import {MaskCepDirective} from "../../../../shared/directives/mask-cep.directive";
import {MaskDateDirective} from "../../../../shared/directives/mask-date.directive";
import {NewDiagnosisPageModule} from "../../new-diagnosis/new-diagnosis.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPatientsPageRoutingModule,
    MaskCepDirective,
    MaskDateDirective,
    NewDiagnosisPageModule
  ],
  declarations: [EditPatientsPage]
})
export class EditPatientsPageModule {}
