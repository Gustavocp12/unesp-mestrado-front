import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDiagnosisPageRoutingModule } from './new-diagnosis-routing.module';

import { NewDiagnosisPage } from './new-diagnosis.page';
import {MaskDateDirective} from "../../../shared/directives/mask-date.directive";
import {MaskCepDirective} from "../../../shared/directives/mask-cep.directive";
import {CalendarComponent} from "../../../shared/components/calendar/calendar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDiagnosisPageRoutingModule,
    MaskDateDirective,
    MaskCepDirective
  ],
    exports: [
        CalendarComponent
    ],
  declarations: [NewDiagnosisPage, CalendarComponent]
})
export class NewDiagnosisPageModule {}
