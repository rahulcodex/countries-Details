import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionViewComponent } from './region-view/region-view.component';
import { RegionwisecountryViewComponent } from './regionwisecountry-view/regionwisecountry-view.component';
import { SinglecountryViewComponent } from './singlecountry-view/singlecountry-view.component';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AllCountriesComponent } from '../shared/all-countries/all-countries.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';



//import { AllCountriesComponent } from '../shared/all-countries/all-countries.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'single/:countryId', component:SinglecountryViewComponent},
      {path:'allcountry/:name', component:RegionwisecountryViewComponent},
      {path:'currency/:code', component:CurrencyComponent},
      {path:'language/:name' , component:LanguageComponent }
     
    ]),
    SharedModule
  ],
  declarations: [RegionViewComponent, RegionwisecountryViewComponent, SinglecountryViewComponent, CurrencyComponent, LanguageComponent],
 
  
 
})
export class ViewsModule { }
