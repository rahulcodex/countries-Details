import { Component, OnInit } from '@angular/core';

import {ActivatedRoute , Router}  from '@angular/router';
import { ToastrService }  from 'ngx-toastr';
import {HttpClient , HttpErrorResponse}  from '@angular/common/http';
import { AppService } from '../../app.service';

import {Observable }  from 'rxjs';
import {catchError, tap}  from 'rxjs/operators';

@Component({
  selector: 'app-regionwisecountry-view',
  templateUrl: './regionwisecountry-view.component.html',
  styleUrls: ['./regionwisecountry-view.component.css']
})
export class RegionwisecountryViewComponent implements OnInit {

  public countries:any;
  public currency:any;

  constructor(public route:ActivatedRoute, public http :HttpClient, public toastr:ToastrService ,public service :AppService) { }

  ngOnInit() {

    let myId = this.route.snapshot.paramMap.get('name');
    console.log(myId);

    this.service.regionWiseCountryView(myId).subscribe((data)=>{
            
      this.countries = data;
    },
  (error)=>{

    this.toastr.warning("some error occured");
   });

   
  
    

  }


  public  goBack(){
    this.toastr.success("go back button triggered");
  }

}
