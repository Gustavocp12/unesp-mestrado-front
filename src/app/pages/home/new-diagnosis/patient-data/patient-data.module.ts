import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientDataPageRoutingModule } from './patient-data-routing.module';

import { PatientDataPage } from './patient-data.page';
import {MaskCepDirective} from "../../../../shared/directives/mask-cep.directive";
import {MaskDateDirective} from "../../../../shared/directives/mask-date.directive";
import {CalendarComponent} from "../../../../shared/components/calendar/calendar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientDataPageRoutingModule,
    MaskCepDirective,
    MaskDateDirective
  ],
  exports: [
    PatientDataPage,
    CalendarComponent
  ],
  declarations: [PatientDataPage, CalendarComponent]
})
export class PatientDataPageModule {}
