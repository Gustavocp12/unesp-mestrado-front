import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientWithoutDiagnosisPage } from './patient-without-diagnosis.page';

const routes: Routes = [
  {
    path: '',
    component: PatientWithoutDiagnosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientWithoutDiagnosisPageRoutingModule {}
