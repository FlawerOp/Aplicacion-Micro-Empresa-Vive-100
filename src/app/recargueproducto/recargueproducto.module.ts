import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecargueproductoPage } from './recargueproducto.page';

const routes: Routes = [
  {
    path: '',
    component: RecargueproductoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecargueproductoPage]
})
export class RecargueproductoPageModule {}
