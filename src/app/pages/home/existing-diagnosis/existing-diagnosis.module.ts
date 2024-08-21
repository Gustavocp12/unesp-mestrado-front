import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingDiagnosisPageRoutingModule } from './existing-diagnosis-routing.module';

import { ExistingDiagnosisPage } from './existing-diagnosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingDiagnosisPageRoutingModule
  ],
  declarations: [ExistingDiagnosisPage]
})
export class ExistingDiagnosisPageModule {}
