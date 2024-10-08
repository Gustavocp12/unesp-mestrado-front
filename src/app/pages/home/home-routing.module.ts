import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'new-diagnosis',
    loadChildren: () => import('./new-diagnosis/new-diagnosis.module').then( m => m.NewDiagnosisPageModule)
  },
  {
    path: 'existing-diagnosis',
    loadChildren: () => import('./existing-diagnosis/existing-diagnosis.module').then( m => m.ExistingDiagnosisPageModule)
  },
  {
    path: 'diagnostics/:id',
    loadChildren: () => import('./diagnostics/diagnostics.module').then( m => m.DiagnosticsPageModule)
  },  {
    path: 'patient-without-diagnosis',
    loadChildren: () => import('./patient-without-diagnosis/patient-without-diagnosis.module').then( m => m.PatientWithoutDiagnosisPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
