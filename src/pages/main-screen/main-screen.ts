import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';
import { ListsPage } from '../lists/lists';
import { OrderHistoryPage } from '../order-history/order-history';
import { OnlineShopsPage } from '../online-shops/online-shops';


@IonicPage()
@Component({
  selector: 'page-main-screen',
  templateUrl: 'main-screen.html',
})
export class MainScreenPage {

  constructor(public navCtrl: NavController) {
  }

  @ViewChild(Slides) slides: Slides;

  navigateToMap() {
    this.navCtrl.push(MapPage);
  }

  navigateToSearch() {
    this.navCtrl.push(SearchPage);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  navigateToFavorites() {
    this.navCtrl.push(FavoritesPage);
  }

  navigateToLists() {
    this.navCtrl.push(ListsPage);
  }

  navigateToOrderHistory() {
    this.navCtrl.push(OrderHistoryPage);
  }

  navigateToOnlineShops() {
    this.navCtrl.push(OnlineShopsPage);
  }

  logout() {
    this.navCtrl.push(HomePage);
  }

}
