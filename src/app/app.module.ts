import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes}  from  '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule}  from 'ngx-toastr';

 
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
//import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { RegionViewComponent } from './views/region-view/region-view.component';
import { AppService } from './app.service';
import { SinglecountryViewComponent } from './views/singlecountry-view/singlecountry-view.component';

import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    FormsModule,
   
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:RegionViewComponent, pathMatch:'full'},
      {path:'' , redirectTo:'/home', pathMatch:'full'},
      {path:'*' ,component:RegionViewComponent},
      {path:'**', component:RegionViewComponent},
      
 

    ])
    
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
