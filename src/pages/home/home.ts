import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
infolist: Array<{ name: string, unit: any, date: any }>;

constructor(public navCtrl: NavController) {

this.infolist = [
    { name: 'Shang Salcedo', unit: '2010A', date: '05/16/17' },
    { name: 'Shang Salcedo', unit: '2011A', date: '05/17/17' },
    { name: 'Shang Salcedo', unit: '2012B', date: '05/18/17' },
    { name: 'Shang Salcedo', unit: '2013C', date: '05/19/17' }
];
  }

}
