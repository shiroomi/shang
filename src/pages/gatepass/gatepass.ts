import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { RequestProvider } from "../../providers/request/request";
import { GatepassdetailPage } from "../gatepassdetail/gatepassdetail";
import { Http } from '@angular/http';

@Component({
  selector: 'page-gatepass',
  templateUrl: 'gatepass.html',
})
export class GatepassPage {


  public error: string;

  public request: any;

  constructor(public navCtrl: NavController,public navParams: NavParams, public requestProvider: RequestProvider,private http: Http,public modalCtrl: ModalController) {

    this.request = {'Approved','Pending','Declined'};
    this.getalldata();
//tenant: string = "Pending"
this.tenant= "Pending";
  }

  getalldata() {
    var url = '../../assets/data/gatepassdata.json';
    return this.datas = this.requestProvider.getAllData(url)
      .subscribe(
        result => {
          this.datas = result.gatepass;
          console.log(this.datas);
        },
        error => { console.error("Error : " + error); },
        () => { console.log('getData completed'); }
      );

  }



  presentModal(d) {
    let modal = this.modalCtrl.create(GatepassdetailPage, {id:d});
    modal.present();
  }
  ionViewDidLoad() {
    //  console.log('ionViewDidLoad TenantPage');
  }


}
