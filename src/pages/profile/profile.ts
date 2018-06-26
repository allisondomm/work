import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }


  back(){
    this.navCtrl.push(MainScreenPage);
  }
}
