import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientDataPage } from './patient-data.page';

const routes: Routes = [
  {
    path: '',
    component: PatientDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDataPageRoutingModule {}
