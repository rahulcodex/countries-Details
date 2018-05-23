import { Component, OnInit } from '@angular/core';

import {ActivatedRoute , Router}  from '@angular/router';
import { ToastrService }  from 'ngx-toastr';
import {HttpClient , HttpErrorResponse}  from '@angular/common/http';


import {Observable }  from 'rxjs';
 import { catchError , tap}  from 'rxjs/operators';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-singlecountry-view',
  templateUrl: './singlecountry-view.component.html',
  styleUrls: ['./singlecountry-view.component.css']
})
export class SinglecountryViewComponent implements OnInit {
  public singleView:any;

  constructor(public http:HttpClient, public toastr:ToastrService , public route:ActivatedRoute, public service:AppService) { }

  ngOnInit() {

    let myId = this.route.snapshot.paramMap.get('countryId');
    console.log(myId);

    this.service.singleCountryView(myId).subscribe((data)=>{
        this.singleView = data;

    },
    (error)=>{
      this.toastr.warning("some error occured");
    }
  )
    
       
  }

  public  goBack(){
    this.toastr.success("go back button triggered");
  }

 

}
