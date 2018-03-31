import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RequestProvider} from  "../../providers/request/request";
import {TenantdetailPage} from  "../tenantdetail/tenantdetail";
import { Http } from '@angular/http';

@Component({
  selector: 'page-tenant',
  templateUrl: 'tenant.html',
})
export class TenantPage {
public datas = [];
public error: string;
public request: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public requestProvider :RequestProvider, private http: Http, ){

  this.getalldata();

  }
  getalldata() {
    var url = '../../assets/data/tenantdata.json';
    this.requestProvider.getAllData(url)
    .subscribe(
        result => {
          this.datas = result;
          console.log( result);
        },
        error =>{
          console.error("Error : "+ error);
        } ,
        () => {
          console.log('getData completed');
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TenantPage');
  }
  openPage() {

   this.navCtrl.setRoot(TenantdetailPage);
  }

}
