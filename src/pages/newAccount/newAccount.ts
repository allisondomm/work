import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfilePage } from '../create-profile/create-profile';

@Component({
  selector: 'page-newAccount',
  templateUrl: 'newAccount.html'
})
export class NewAccountPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCreateProf(){
    console.log("navigating...");
    this.navCtrl.push(CreateProfilePage);
  }
  

}