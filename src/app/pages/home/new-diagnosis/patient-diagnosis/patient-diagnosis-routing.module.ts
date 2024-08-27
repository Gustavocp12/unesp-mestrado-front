import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientDiagnosisPage } from './patient-diagnosis.page';

const routes: Routes = [
  {
    path: '',
    component: PatientDiagnosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDiagnosisPageRoutingModule {}
