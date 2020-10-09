import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pantalla2',
  templateUrl: './pantalla2.page.html',
  styleUrls: ['./pantalla2.page.scss'],
})
export class Pantalla2Page implements OnInit {

  constructor(private navCtrl: NavController){

  }
  ngOnInit() {
  }
  
  goToPantalla1(){
    this.navCtrl.navigateForward('/home');
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
