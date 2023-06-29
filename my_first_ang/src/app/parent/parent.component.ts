import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  s1dataFromPar : any;
  dataFromChild :any;


  getData(value :any){
this.dataFromChild=value;
  }
}
