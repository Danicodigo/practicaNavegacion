import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pantalla5',
  templateUrl: './pantalla5.page.html',
  styleUrls: ['./pantalla5.page.scss'],
})
export class Pantalla5Page implements OnInit {

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
  goToPantalla4(){
    this.navCtrl.navigateForward('/pantalla4');
  }
  irAtras() {
    this.navCtrl.pop();
  }
}
