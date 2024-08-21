import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDiagnosisPage } from './new-diagnosis.page';

const routes: Routes = [
  {
    path: '',
    component: NewDiagnosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDiagnosisPageRoutingModule {}
