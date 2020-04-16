import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoundtoeuroPage } from './poundtoeuro.page';

const routes: Routes = [
  {
    path: '',
    component: PoundtoeuroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoundtoeuroPageRoutingModule {}
