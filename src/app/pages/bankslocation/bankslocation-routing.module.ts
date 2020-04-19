import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankslocationPage } from './bankslocation.page';

const routes: Routes = [
  {
    path: '',
    component: BankslocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankslocationPageRoutingModule {}
