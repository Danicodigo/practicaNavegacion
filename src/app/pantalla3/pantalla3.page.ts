import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pantalla3',
  templateUrl: './pantalla3.page.html',
  styleUrls: ['./pantalla3.page.scss'],
})
export class Pantalla3Page implements OnInit {


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
