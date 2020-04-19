import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../Services/currency.service';

@Component({
  selector: 'app-poundtoeuro',
  templateUrl: './poundtoeuro.page.html',
  styleUrls: ['./poundtoeuro.page.scss'],
})
export class PoundtoeuroPage implements OnInit {
  source = "GBP";
  private input = null;
  private outputs = [];

  constructor(private currency:CurrencyService) { }

  ngOnInit() {
    this.currency.updateCurrencies();
  }
  exchange() {
    this.currency.getCurrencies('GBP')
        .then(rates => {
            this.outputs = [];
                this.outputs.push({
                    name  : 'EUR' ,
                    value : (this.input * rates.rates['EUR']),
                    rate : rates.rates['EUR']
            });
    
        });
  }   
}
