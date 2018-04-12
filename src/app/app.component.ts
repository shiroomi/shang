import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { TenantPage } from '../pages/tenant/tenant';
import { TenantdetailPage } from '../pages/tenantdetail/tenantdetail';
import { PetRegPage } from '../pages/petreg/petreg';
import { VisitorLogPage } from '../pages/visitorlog/visitorlog';
import { ParkingPage } from '../pages/parking/parking';
import { MemberledgerPage } from '../pages/memberledger/memberledger';
import { GatepassPage } from '../pages/gatepass/gatepass';
import { AccesscardPage } from '../pages/accesscard/accesscard';
import { DesignfitoutPage } from '../pages/designfitout/designfitout';
import { DesignfitdetailPage } from '../pages/designfitout/designfitdetail';
import { LeaveabsencePage } from '../pages/leaveabsence/leaveabsence';
import { MeterreadingPage } from '../pages/meterreading/meterreading';
import { VehiclestickerPage } from '../pages/vehiclesticker/vehiclesticker';
import { ViolationPage } from '../pages/violation/violation';
import { WorkpermitPage } from '../pages/workpermit/workpermit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DesignfitoutPage;

  pages: Array<{ title: string, component: any, icon: any }>;
  profile: Array<{ title: string, component: any, icon: any }>;
  forms: Array<{ title: string, component: any, icon: any }>;
  faq: Array<{ title: string, component: any, icon: any }>;
  docs: Array<{ title: string, component: any, icon: any }>;
  regs: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();
    this.HomePage = HomePage;

    this.profile = [
      { title: 'Personal Information', component: ProfilePage, icon: 'icon-dashboard' },
      { title: 'Member\'s Ledgers', component: MemberledgerPage, icon: 'icon-website' },
      { title: 'Parking Information', component: ParkingPage, icon: 'icon-information' }
    ];

    this.forms = [
      { title: 'Registrations', component: TenantPage, icon: 'icon-dashboard' },
      { title: 'Forms', component: ProfilePage, icon: 'icon-website' }
    ];
    this.faq = [
      { title: 'Building FAQS', component: HomePage, icon: 'icon-dashboard' },
      { title: 'Announcements', component: ProfilePage, icon: 'icon-website' }
    ];
    this.docs = [
      { title: 'House Rules', component: HomePage, icon: 'icon-dashboard' }
    ];
    this.regs = [
      { title: 'Pet Registration', component: PetRegPage, icon: 'icon-dashboard' },
      { title: 'Tenant Registrations', component: TenantPage, icon: 'icon-dashboard' },
      { title: 'Visitors Log', component: VisitorLogPage, icon: 'icon-dashboard' }
    ];
    this.formlist = [
      { title: 'GatePass Request', component: GatepassPage, icon: 'icon-dashboard' },
      { title: 'Work Permit', component: WorkpermitPage, icon: 'icon-dashboard' },
      { title: 'Vehicle Sticker', component: VehiclestickerPage, icon: 'icon-dashboard' },
      { title: 'Leave of Absense', component: LeaveabsencePage, icon: 'icon-dashboard' },
      { title: 'Access Card', component: AccesscardPage, icon: 'icon-dashboard' },
      { title: 'Design and Fit-out', component: DesignfitoutPage, icon: 'icon-dashboard' },
      { title: 'Meter Reading', component: MeterreadingPage, icon: 'icon-dashboard' },
      { title: 'Violation & Incident', component: ViolationPage, icon: 'icon-dashboard' },
      { title: 'Visitor Log', component: VisitorLogPage, icon: 'icon-dashboard' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    this.nav.setRoot(page);
  }

  nextMenu(page) {
    this.menuCtrl.enable(true, page);
    this.menuCtrl.open(page);
  }

  backMain(p) {
    this.menuCtrl.enable(true, 'main');
    this.menuCtrl.open();

  }
  openMenu(page) {
    this.nav.push(page);
  }

}
