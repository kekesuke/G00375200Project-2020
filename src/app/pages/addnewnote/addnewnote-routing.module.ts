import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewnotePage } from './addnewnote.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewnotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewnotePageRoutingModule {}
