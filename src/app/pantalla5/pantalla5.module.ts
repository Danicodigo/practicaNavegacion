import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pantalla5PageRoutingModule } from './pantalla5-routing.module';

import { Pantalla5Page } from './pantalla5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pantalla5PageRoutingModule
  ],
  declarations: [Pantalla5Page]
})
export class Pantalla5PageModule {}
