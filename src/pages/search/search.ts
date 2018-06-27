import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MainScreenPage } from '../main-screen/main-screen';
import { SearchResultsPage } from '../search-results/search-results';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back(){
    this.navCtrl.push(MainScreenPage);
  }

  navigateToSearchResults(){
    this.navCtrl.push(SearchResultsPage);
  }

}
