import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsdtoeuroPageRoutingModule } from './usdtoeuro-routing.module';

import { UsdtoeuroPage } from './usdtoeuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsdtoeuroPageRoutingModule
  ],
  declarations: [UsdtoeuroPage]
})
export class UsdtoeuroPageModule {}
