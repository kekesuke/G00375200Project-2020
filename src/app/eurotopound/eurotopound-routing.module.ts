import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EurotopoundPage } from './eurotopound.page';

const routes: Routes = [
  {
    path: '',
    component: EurotopoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EurotopoundPageRoutingModule {}
