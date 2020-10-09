import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pantalla4PageRoutingModule } from './pantalla4-routing.module';

import { Pantalla4Page } from './pantalla4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pantalla4PageRoutingModule
  ],
  declarations: [Pantalla4Page]
})
export class Pantalla4PageModule {}
