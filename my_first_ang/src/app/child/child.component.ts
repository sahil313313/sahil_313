import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   
@Input() datafrompars2 :any;
@Input() dataforpar :any;
@Output() dataToPar = new EventEmitter <any>;



forParent(data:any){
let data1=data.target.value;
this.dataToPar.emit(data1)
}
}
