import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pantalla4Page } from './pantalla4.page';

const routes: Routes = [
  {
    path: '',
    component: Pantalla4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pantalla4PageRoutingModule {}
