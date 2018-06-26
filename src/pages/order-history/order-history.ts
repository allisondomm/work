import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';


@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {

  constructor(public navCtrl: NavController) {
  }

  back(){
    this.navCtrl.push(MainScreenPage);
  }

}
