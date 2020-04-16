import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CurrencyService} from './Services/currency.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  updateInterval:number = 10000 * 60 * 5; // 50 minutes
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private currencyService:CurrencyService
  ) {
    this.initializeApp();
    this.updateCurrencies();//calling the method and retrieving data from httpclient
  }
  updateCurrencies() { // updateing the currency
    this.currencyService.updateCurrencies();
    setTimeout(() => { this.updateCurrencies() }, this.updateInterval);
}
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
}
