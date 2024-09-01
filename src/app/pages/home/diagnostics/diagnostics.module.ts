import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticsPageRoutingModule } from './diagnostics-routing.module';

import { DiagnosticsPage } from './diagnostics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticsPageRoutingModule
  ],
  declarations: [DiagnosticsPage]
})
export class DiagnosticsPageModule {}
