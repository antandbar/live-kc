import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { ReferenciasComponent } from './referencias/referencias.component';



@NgModule({
  declarations: [
    HomeComponent,
    SaludoComponent,
    ReferenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
