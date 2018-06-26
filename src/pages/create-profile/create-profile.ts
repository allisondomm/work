import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular'; 
import { MainScreenPage } from '../main-screen/main-screen';


declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'How to use this app: ...',
      showCloseButton: true,
      position: "middle"
    });
    toast.present().then(() => {
      toast.onDidDismiss(() => {
        this.navigateToMain();
      });
    });
  }


  navigateToMain() {
    this.navCtrl.push(MainScreenPage);
  }
}