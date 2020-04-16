import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsdtoeuroPage } from './usdtoeuro.page';

const routes: Routes = [
  {
    path: '',
    component: UsdtoeuroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsdtoeuroPageRoutingModule {}
