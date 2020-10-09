import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pantalla3PageRoutingModule } from './pantalla3-routing.module';

import { Pantalla3Page } from './pantalla3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pantalla3PageRoutingModule
  ],
  declarations: [Pantalla3Page]
})
export class Pantalla3PageModule {}
