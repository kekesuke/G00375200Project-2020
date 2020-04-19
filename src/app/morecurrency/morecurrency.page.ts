import { Component, OnInit } from '@angular/core';
import{ CurrencyService } from '../Services/currency.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-morecurrency',
  templateUrl: './morecurrency.page.html',
  styleUrls: ['./morecurrency.page.scss'],
})
export class MorecurrencyPage implements OnInit {
  input = null;
  private outputs:any = [];
  private from: string;
  private to: string;
  
  
  constructor(private currency:CurrencyService, public navCtrl: NavController) { }

  ngOnInit() {
  this.currency.updateCurrencies();
  }


  exchange() {
    this.currency.getCurrencies(this.from)
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

