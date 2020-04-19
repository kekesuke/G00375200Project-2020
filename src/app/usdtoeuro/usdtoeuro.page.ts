import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../Services/currency.service';
@Component({
  selector: 'app-usdtoeuro',
  templateUrl: './usdtoeuro.page.html',
  styleUrls: ['./usdtoeuro.page.scss'],
})
export class UsdtoeuroPage implements OnInit {
  source = "USD";
  private input = null;
  private outputs = [];

  constructor(private currency:CurrencyService) { }

  ngOnInit() {
    this.currency.updateCurrencies();
  }

  exchange() {
    this.currency.getCurrencies('USD')
        .then(rates => {
            this.outputs = [];
                this.outputs.push({
                    name  : 'EUR' ,
                    value : (this.input * rates.rates["EUR"]),
                    rate : rates.rates["EUR"]
            });
    
        });
  }  
}
