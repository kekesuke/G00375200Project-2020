import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../Services/currency.service';

@Component({
  selector: 'app-eurotopound',
  templateUrl: './eurotopound.page.html',
  styleUrls: ['./eurotopound.page.scss'],
})
export class EurotopoundPage implements OnInit {
  source = "Euro";
  private input:number = null;
  private outputs:any = [];
  
  constructor(private currency:CurrencyService) { }
  
  ngOnInit() {
    this.currency.updateCurrencies();
  }


exchange() {
    this.currency.getCurrencies('EUR')
        .then(rates => {
            this.outputs = [];
                this.outputs.push({
                    name  : 'GBP' ,
                    value : (this.input *  rates.rates['GBP']),
                    rate : rates.rates['GBP']
            });
    
        });
}   
}
