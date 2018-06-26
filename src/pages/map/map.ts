import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController) {
  }

  back(){
    this.navCtrl.push(MainScreenPage);
  }
}
