import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CartPage } from '../cart/cart';
import { MainScreenPage } from '../main-screen/main-screen';

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMap(){
    this.navCtrl.push(MapPage);
  }

  goToWebsite(){
    
  }

  cart(){
    this.navCtrl.push(CartPage);
  }

  back(){
    this.navCtrl.push(MainScreenPage)
  }

}
