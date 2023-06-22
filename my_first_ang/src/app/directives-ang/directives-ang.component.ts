import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives-ang',
  templateUrl: './directives-ang.component.html',
  styleUrls: ['./directives-ang.component.css']
})
export class DirectivesAngComponent {
  constructor(private router:Router){}

  back(){
    this.router.navigateByUrl("/")
  }
  cls = 'yellow'
  cls1 = false
  cls2! :String;
  undefinedCls:any;
  cls3 = null;
  toggel : Boolean = false;

}
