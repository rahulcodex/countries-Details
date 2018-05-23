import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Location}  from '@angular/common';

@Component({
  selector: 'app-goback',
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.css'], 
  providers:[Location]
})
export class GobackComponent implements OnInit {

  @Input() userBg;
  @Input() userColor;

 @Output()
 notify:EventEmitter <string> =new EventEmitter<string>();
  

  constructor(public location:Location ) { }

  ngOnInit() {
  }

    public goBack():any{
       this.location.back();
       this.notify.emit();
       
    }


}
