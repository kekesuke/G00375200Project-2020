import { Injectable } from '@angular/core';
import{ HttpClient }from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httClient:HttpClient, protected storage: Storage) { }

getCurrencies() : Promise<any> {
  return this.storage.get('currencies');
}

updateCurrencies() {
  this.httClient.get('http://data.fixer.io/api/latest?access_key=8965caff5766dbcd51861d872e47d910&symbols=EUR,GBP&format=1')
      .subscribe((rates) => {
          let currencies = rates;
          console.log(currencies);
          this.storage.set('currencies', currencies);
      });
}

}
