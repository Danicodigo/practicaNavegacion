import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController){

  }
  goToPantalla1(){
    this.navCtrl.navigateForward('/pantalla1');
  }
  goToPantalla2(){
    this.navCtrl.navigateForward('/pantalla2');
  }
  goToPantalla3(){
    this.navCtrl.navigateForward('/pantalla3');
  }
  goToPantalla4(){
    this.navCtrl.navigateForward('/pantalla4');
  }
  goToPantalla5(){
    this.navCtrl.navigateForward('/pantalla5');
  }
  irAtras() {
    this.navCtrl.pop();
  }
}
