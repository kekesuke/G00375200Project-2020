import { Component } from '@angular/core';
import { CurrencyService } from '../Services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private input = null;
  private outputs:any = [];
  private from: string;
  private to: string;
  constructor(private currencyservice:CurrencyService) {}

  exchange() {
    this.currencyservice.getCurrencies(this.from)//getting the objects from the storage with parameter from
    .then(rates => {
          this.outputs = [];
                this.outputs.push({
                    name  : this.to,
                    value : (this.input * rates.rates[this.to]),
                    rate : rates.rates[this.to]
            });   
        });
  }   
  
}


