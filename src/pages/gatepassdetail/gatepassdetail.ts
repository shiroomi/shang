import { Component } from '@angular/core';
import { NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the GatepassdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gatepassdetail',
  templateUrl: 'gatepassdetail.html',
})
export class GatepassdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GatepassdetailPage');
  }

  closeModal() {

    this.viewCtrl.dismiss();
    }

}
