import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingDiagnosisPage } from './existing-diagnosis.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingDiagnosisPage
  },
  {
    path: 'edit-patients/:id',
    loadChildren: () => import('./edit-patients/edit-patients.module').then( m => m.EditPatientsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingDiagnosisPageRoutingModule {}
