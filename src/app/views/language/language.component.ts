import { Component, OnInit } from '@angular/core';

import {ActivatedRoute , Router}  from '@angular/router';
import { ToastrService }  from 'ngx-toastr';
import {HttpClient , HttpErrorResponse}  from '@angular/common/http';


import {Observable }  from 'rxjs';
 import { catchError , tap}  from 'rxjs/operators';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  public language:string;

  constructor( public service:AppService, public toastr:ToastrService,public route:ActivatedRoute) { }

  ngOnInit() {

  let name =  this.route.snapshot.paramMap.get('name');
  this.toastr.success("language spoken by these countries " +':'+name);
  console.log(name);
    this.service.langjuageFilter(name).subscribe((data)=>{
      
      this.language = data;
    },
    (error)=>{
         this.toastr.error("some error occured");
    }
  )
  
  }
  
  public  goBack(){
    this.toastr.success("go back button triggered");
  }


}
