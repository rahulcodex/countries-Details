import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs';
import {catchError, tap }  from 'rxjs/operators';

import {HttpClient , HttpErrorResponse}  from '@angular/common/http';

 import {Check}   from  './check';



@Injectable({
  providedIn: 'root'
})
export class AppService implements Check  {

  private url='https://restcountries.eu/rest/v2';


  public region:any;

   

  constructor(public http:HttpClient) { }

  public regionWiseView:any=()=>{

   let response = this.http.get(`${this.url}/all?fields=region`);
   return response;
  }

  public regionWiseCountryView:any=(name)=>{
    console.log(name)
    let myresponse = this.http.get(this.url + '/region/' + name);
    console.log(myresponse)
    return myresponse;
  }

  public singleCountryView:any=(name)=>{
    console.log(name);
    let myresponse = this.http.get(`${this.url}/name/${name}`);
    return myresponse;
  }

  public currencyFilter:any=(code)=>{
      console.log(code);
      let response1= this.http.get(`${this.url}/currency/${code}`);
      return  response1;
  }

  public langjuageFilter:any=(name)=>{
    console.log(name);
    let response = this.http.get(`${this.url}/lang/${name}`);
    return response;

  }
}
