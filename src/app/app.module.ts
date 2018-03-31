import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Platform } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { TenantPage } from '../pages/tenant/tenant';
import { TenantdetailPage } from '../pages/tenantdetail/tenantdetail';
import { PetRegPage } from '../pages/petreg/petreg';
import { VisitorLogPage } from '../pages/visitorlog/visitorlog';
import { RequestProvider } from '../providers/request/request';
import { ParkingPage } from '../pages/parking/parking';
import { MemberledgerPage } from '../pages/memberledger/memberledger';
import { GatepassPage } from '../pages/gatepass/gatepass';
import { AccesscardPage } from '../pages/accesscard/accesscard';
import { DesignfitoutPage } from '../pages/designfitout/designfitout';
import { LeaveabsencePage } from '../pages/leaveabsence/leaveabsence';
import { MeterreadingPage } from '../pages/meterreading/meterreading';
import { VehiclestickerPage } from '../pages/vehiclesticker/vehiclesticker';
import { ViolationPage } from '../pages/violation/violation';
import { WorkpermitPage } from '../pages/workpermit/workpermit';
import { GatepassdetailPage } from '../pages/gatepassdetail/gatepassdetail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    TenantPage,
    PetRegPage,
    VisitorLogPage,
    TenantdetailPage,
    ParkingPage,
    MemberledgerPage,
    GatepassPage,
    AccesscardPage,
    DesignfitoutPage,
    MeterreadingPage,
    VehiclestickerPage,
    ViolationPage,
    WorkpermitPage,
    GatepassdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    TenantPage,
    PetRegPage,
    VisitorLogPage,
    TenantdetailPage,
    ParkingPage,
    MemberledgerPage,
    GatepassPage,
    AccesscardPage,
    DesignfitoutPage,
    MeterreadingPage,
    VehiclestickerPage,
    ViolationPage,
    WorkpermitPage,
    GatepassdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RequestProvider
  ]
})
export class AppModule { }
