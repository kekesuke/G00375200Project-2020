import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EurotopoundPageRoutingModule } from './eurotopound-routing.module';

import { EurotopoundPage } from './eurotopound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EurotopoundPageRoutingModule
  ],
  declarations: [EurotopoundPage]
})
export class EurotopoundPageModule {}
