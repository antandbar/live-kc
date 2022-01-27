import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormVdComponent } from './form-vd/form-vd.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactosComponent,
    FormVdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule { }
