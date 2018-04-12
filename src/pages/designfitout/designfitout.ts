import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestProvider } from "../../providers/request/request";
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { DesignfitdetailPage } from './designfitdetail';
import { AdddesignfitPage } from './adddesignfit';


@Component({
  selector: 'page-designfitout',
  templateUrl: 'designfitout.html',
})
export class DesignfitoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public requestProvider: RequestProvider, private http: Http, public modalCtrl: ModalController) {
  this.getalldata();
 }

  getalldata() {
    var url = '../../assets/data/designfitdata.json';
    return this.requestProvider.getAllData(url)
      .subscribe(
        result => { this.data = result.designfitout; console.log(this.data); },
        error => { console.error("Error : " + error); },
        () => { console.log('getData completed'); }
      );
  }
  GetDetails(d) {
    this.modalCtrl.create(DesignfitdetailPage, { data: d }, { cssClass: 'inset-modal' })
                .present();
  }
  adddesignfit() {
    let modal = this.modalCtrl.create(AdddesignfitPage);
    modal.present();
  }

}
