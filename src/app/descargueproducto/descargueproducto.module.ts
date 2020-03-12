import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescargueproductoPage } from './descargueproducto.page';

const routes: Routes = [
  {
    path: '',
    component: DescargueproductoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescargueproductoPage]
})
export class DescargueproductoPageModule {}
