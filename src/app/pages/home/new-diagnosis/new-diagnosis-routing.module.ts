import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDiagnosisPage } from './new-diagnosis.page';

const routes: Routes = [
  {
    path: '',
    component: NewDiagnosisPage
  },  {
    path: 'patient-data',
    loadChildren: () => import('./patient-data/patient-data.module').then( m => m.PatientDataPageModule)
  },
  {
    path: 'patient-diagnosis',
    loadChildren: () => import('./patient-diagnosis/patient-diagnosis.module').then( m => m.PatientDiagnosisPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDiagnosisPageRoutingModule {}
