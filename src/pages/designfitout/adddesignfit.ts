import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-adddesignfit',
  templateUrl: 'adddesignfit.html',
})
export class AdddesignfitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddesignfitPage');
  }
  closePage() {
    this.viewCtrl.dismiss();
  }

}
