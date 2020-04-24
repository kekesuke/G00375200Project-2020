import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewnotePageRoutingModule } from './addnewnote-routing.module';

import { AddnewnotePage } from './addnewnote.page';

import {ReactiveFormsModule} from '@angular/forms' //Exports the required infrastructure and directives for reactive forms, making them available for import by NgModules that import this module.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AddnewnotePageRoutingModule
  ],
  declarations: [AddnewnotePage]
})
export class AddnewnotePageModule {}
