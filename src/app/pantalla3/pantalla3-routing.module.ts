import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pantalla3Page } from './pantalla3.page';

const routes: Routes = [
  {
    path: '',
    component: Pantalla3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pantalla3PageRoutingModule {}
