import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestProvider } from "../../providers/request/request";
import { GatepassdetailPage } from "../gatepassdetail/gatepassdetail";
import { AddgatepassPage } from "../addgatepass/addgatepass";
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-gatepass',
  templateUrl: 'gatepass.html',
})

export class GatepassPage {
  public error: string;
  public tenant: string;
  public request: any;
  approved = GatepassContent;
  declined = GatepassContent;
  pending = GatepassContent;

  @ViewChild('gatepass') tabRef: Tabs;
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestProvider: RequestProvider, private http: Http, public modalCtrl: ModalController) {  }
      ionViewDidLoad() {
  }
  public onTabsChange() {
    return this.ref = this.tabRef.getSelected().tabTitle;
  }

  public AddGatepass(d) {
    let modal = this.modalCtrl.create(AddgatepassPage);
    modal.present();
  }
}

@Component({
  selector: 'page-gatepass',
    template: `<ion-content no-padding><ion-list><ion-card (click)="GetDetails(d)" no-padding *ngFor="let d of data">
                  <ion-item-divider>
                    <div item-left no-padding><h4><span class="listtitle">Unit :</span>{{d.unit}}</h4></div>
                    <div item-right no-padding><h4><span class="listtitle">Date :</span>{{d.date}}</h4></div>
                  </ion-item-divider>
                  <ion-item>
                    <div item-left no-padding>
                      <h4><span class="listtitle">Document No :</span><b>{{d.docID}}</b></h4>
                      <h4><span class="listtitle">Type :</span> {{d.type}}</h4>
                    </div>
                    <div item-right no-padding *ngFor="let b of d.bearer">
                      <h4><span class="listtitle">Bearer :</span>{{b.firstname}} {{b.lastname}}</h4>
                      <h4><span class="listtitle">Bearer # :</span>{{b.mobile}}</h4>
                    </div>
                  </ion-item>
              </ion-card>
            </ion-list>
            </ion-content>`
})

export class GatepassContent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public requestProvider: RequestProvider, private http: Http, public modalCtrl: ModalController) {
    this.getalldata();
  }

  getalldata() {
    var url = '../../assets/data/gatepassdata.json';
    return this.requestProvider.getAllData(url)
      .subscribe(
        result => { this.data = result.gatepass; },
        error => { console.error("Error : " + error); },
        () => { console.log('getData completed'); }
      );
  }

  GetDetails(d) {
    let modal = this.modalCtrl.create(GatepassdetailPage, { data: d });
    modal.present();
  }


}
