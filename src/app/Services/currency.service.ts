import { Injectable } from '@angular/core';
import{ HttpClient }from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  from:String;
  to:String;
  url:any;

  constructor(private httClient:HttpClient, private storage: Storage) { }

getCurrencies(sign?:string) : Promise<any> {
  return this.storage.get(sign);
}

updateCurrencies() {
  let allCurrencies=["USD","EUR","JPY","BGN","CZK","DKK","GBP","HUF","PLN","RON","SEK","CHF","ISK","NOK","HRK","RUB","TRY","AUD","BRL","CAD","CNY","HKD","IDR","ILS","INR","KRW","MXN","MYR","NZD","PHP","SGD","THB","ZAR"];
  
  allCurrencies.forEach(e=>{
  this.url='https://api.exchangeratesapi.io/latest?base='+e
  this.httClient.get(this.url)
      .subscribe((currency) => {    

        this.storage.set(e, currency);
      });
      
})



   
     
}


}
