import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { RequestProvider } from "../../providers/request/request";

@Component({
  selector: 'page-gatepassdetail',
  templateUrl: 'gatepassdetail.html',

})
export class GatepassdetailPage {
  private data: [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public requestProvider: RequestProvider) {
    this.data = this.navParams.get('data');
    console.log(this.data);
  }

  ionViewDidLoad() {
  }

  closeModal() {

    this.viewCtrl.dismiss('data');
  }


}
