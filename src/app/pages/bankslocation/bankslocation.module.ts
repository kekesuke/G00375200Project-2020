import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankslocationPageRoutingModule } from './bankslocation-routing.module';

import { BankslocationPage } from './bankslocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankslocationPageRoutingModule
  ],
  declarations: [BankslocationPage]
})
export class BankslocationPageModule {}
