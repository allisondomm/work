import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';


@IonicPage()
@Component({
  selector: 'page-online-shops',
  templateUrl: 'online-shops.html',
})
export class OnlineShopsPage {

  constructor(public navCtrl: NavController) {
  }

  back(){
    this.navCtrl.push(MainScreenPage);
  }

}
