import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../Services/currency.service';
import{ HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-eurotopound',
  templateUrl: './eurotopound.page.html',
  styleUrls: ['./eurotopound.page.scss'],
})
export class EurotopoundPage implements OnInit {
  CurrencyData:any=[];
  constructor(private currency:CurrencyService, private httpClient:HttpClient) { }

  public source = "Euro";
    public target;
    public input = null;
    public outputs = [];
  ngOnInit() {
  }


exchange() {
    this.currency.getCurrencies()
        .then(rates => {
            this.outputs = [];
           let currency = 'GBP';
                this.outputs.push({
                    name  : currency ,
                    value : (this.input * rates.rates.GBP),
                    rate : rates.rates.GBP
            });
    
        });
}   
}
