import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(public navCtrl: NavController) {
  }

  back(){
    this.navCtrl.push(MainScreenPage);
  }

}
