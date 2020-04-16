import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoundtoeuroPageRoutingModule } from './poundtoeuro-routing.module';

import { PoundtoeuroPage } from './poundtoeuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoundtoeuroPageRoutingModule
  ],
  declarations: [PoundtoeuroPage]
})
export class PoundtoeuroPageModule {}
