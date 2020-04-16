import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorecurrencyPageRoutingModule } from './morecurrency-routing.module';

import { MorecurrencyPage } from './morecurrency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorecurrencyPageRoutingModule
  ],
  declarations: [MorecurrencyPage]
})
export class MorecurrencyPageModule {}
