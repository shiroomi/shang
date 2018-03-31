import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

@Injectable()
export class RequestProvider {
  public datas = [];
  public error: string;
  constructor(private http: Http,
  private platform: Platform) {
  this.http = http;

}
   getAllData(url) {


      if (this.platform.is('cordova') && this.platform.is('android')) {
        url = "/android_asset/www" + url;
      }

      return this.http.get(url)
       .map(res => res.json());

    }

    getDataByID(url,id) {

          if (this.platform.is('cordova') && this.platform.is('android')) {
            url = "/android_asset/www" + url;
          }

            return this.http.get(url)
                .map(res => {
                    return res.json().categories.filter((item) => {
                        return item.id.length > 2;
                    })
                });

        }





}
