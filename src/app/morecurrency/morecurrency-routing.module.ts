import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorecurrencyPage } from './morecurrency.page';

const routes: Routes = [
  {
    path: '',
    component: MorecurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorecurrencyPageRoutingModule {}
