import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {Observable }  from 'rxjs';
import {catchError, tap}  from 'rxjs/operators';
import { ToastrService }  from 'ngx-toastr';



@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionViewComponent implements OnInit {

  public region:any;

  constructor(public service:AppService, public toastr:ToastrService) { }

  ngOnInit() {

      this.service.regionWiseView().subscribe((data)=>{

        this.region=  data;

      },
      (error)=>{
        this.toastr.warning("some  error occured");
      }
    );

  }

  public showCountry(){

  }

}
