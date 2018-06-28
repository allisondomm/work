import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainScreenPage } from '../main-screen/main-screen';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    username='';
    password='';


  constructor(public navCtrl: NavController) {
     
  }

  navigateToMain(){
      console.log(this.username);
      console.log(this.password);
      console.log("navigating...");
      this.navCtrl.push(MainScreenPage);
  }

  login(){
      //check database to see if user exists
      //if user exists then call profile.setInfo() and navigateToMain()
  }
  

}