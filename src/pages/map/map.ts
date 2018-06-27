
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';

import { Component, ViewChild } from '@angular/core';
import { GoogleMapComponent } from '../../components/google-map/google-map';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild(GoogleMapComponent) mapComponent: GoogleMapComponent;
 
    constructor(public navCtrl: NavController) {
 
    }
 
    testMarker(){
 
        let center = this.mapComponent.map.getCenter();
        this.mapComponent.addMarker(center.lat(), center.lng());
 
    }

  back(){
    this.navCtrl.push(MainScreenPage);
  }
}
