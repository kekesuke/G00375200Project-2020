import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EurotousdPage } from './eurotousd.page';

const routes: Routes = [
  {
    path: '',
    component: EurotousdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EurotousdPageRoutingModule {}
