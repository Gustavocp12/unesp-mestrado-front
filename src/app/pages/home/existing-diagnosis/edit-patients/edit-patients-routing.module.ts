import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPatientsPage } from './edit-patients.page';

const routes: Routes = [
  {
    path: '',
    component: EditPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPatientsPageRoutingModule {}
