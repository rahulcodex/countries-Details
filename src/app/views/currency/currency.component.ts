import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router}  from '@angular/router';
import { ToastrService }  from 'ngx-toastr';
import {HttpClient , HttpErrorResponse}  from '@angular/common/http';


import {Observable }  from 'rxjs';
 import { catchError , tap}  from 'rxjs/operators';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  
public currency:any;

  constructor(public service:AppService, public toastr:ToastrService,public route:ActivatedRoute) { }

  ngOnInit() {

    

  let code = this.route.snapshot.paramMap.get('code');
  this.toastr.success(" currency  code" +code);
  console.log(code) ;

  this.service.currencyFilter(code).subscribe((data)=>{
      
    this.currency = data;
  },
       (error)=>{
         this.toastr.warning("some error occured");
       });
  }

  public  goBack(){
    this.toastr.success("go back button triggered");
  }

}
