import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pantalla5Page } from './pantalla5.page';

const routes: Routes = [
  {
    path: '',
    component: Pantalla5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pantalla5PageRoutingModule {}
