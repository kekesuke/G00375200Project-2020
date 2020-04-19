import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../Services/currency.service';

@Component({
  selector: 'app-eurotousd',
  templateUrl: './eurotousd.page.html',
  styleUrls: ['./eurotousd.page.scss'],
})
export class EurotousdPage implements OnInit {
  source = "Euro";
  private input = null;
  private outputs = [];

  constructor(private currency:CurrencyService) { }

  ngOnInit() {
    this.currency.updateCurrencies();
  }
  
  exchange() {
      this.currency.getCurrencies('EUR')
          .then(rates => {
              this.outputs = [];
                  this.outputs.push({
                      name  : 'USD' ,
                      value : (this.input *  rates.rates['USD']),
                      rate : rates.rates['USD']
              });
      
          });
  }   
}
