import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToMain(){
      console.log("navigating...");
      this.navCtrl.push(MainScreenPage);
  }
  

}