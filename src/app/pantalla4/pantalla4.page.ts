import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pantalla4',
  templateUrl: './pantalla4.page.html',
  styleUrls: ['./pantalla4.page.scss'],
})
export class Pantalla4Page implements OnInit {

  constructor(private navCtrl: NavController){

  }
  ngOnInit() {
  }
  goToPantalla1(){
    this.navCtrl.navigateForward('/home');
  }
  goToPantalla2(){
    this.navCtrl.navigateForward('/pantalla2');
  }
  goToPantalla3(){
    this.navCtrl.navigateForward('/pantalla3');
  }
  goToPantalla5(){
    this.navCtrl.navigateForward('/pantalla5');
  }
  irAtras() {
    this.navCtrl.pop();
  }
}
