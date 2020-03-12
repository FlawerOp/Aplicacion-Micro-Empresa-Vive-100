import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiaempleadoPage } from './diaempleado.page';

const routes: Routes = [
  {
    path: '',
    component: DiaempleadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiaempleadoPage]
})
export class DiaempleadoPageModule {}
