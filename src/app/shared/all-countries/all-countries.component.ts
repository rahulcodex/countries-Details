import { Component, OnInit , Input, Output,EventEmitter,OnChanges} from '@angular/core';



@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']

})
export class AllCountriesComponent implements OnInit {

  

  @Input() name:string;
  @Input() capital:string;
  @Input()  region:any;
  @Input()  subregion:any;
  @Input()  code:any;
  @Input()  language;
 
  @Output()
  notify:EventEmitter<string> =new EventEmitter<string>();

 
 

  constructor() { }

  ngOnInit() {


  }

  public  codeClicked(){
    this.notify.emit(this.code);
  }

 




}
