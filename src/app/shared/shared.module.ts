import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AllCountriesComponent } from './all-countries/all-countries.component';
import { GobackComponent } from './goback/goback.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  AllCountriesComponent, GobackComponent
  ],
  exports:[
  CommonModule,AllCountriesComponent,FormsModule,GobackComponent
  ]
})
export class SharedModule { }
