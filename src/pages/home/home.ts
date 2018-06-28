import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{LoginPage} from "../login/login";
import { CreateProfilePage } from '../create-profile/create-profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin(){
    console.log("Navigating...");
    this.navCtrl.push(LoginPage);
  }

  navigateToNewAccount(){
    console.log("Navigating...");
    this.navCtrl.push(CreateProfilePage);
  }

}
