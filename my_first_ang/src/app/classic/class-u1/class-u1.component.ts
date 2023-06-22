import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-u1',
  templateUrl: './class-u1.component.html',
  styleUrls: ['./class-u1.component.css']
})
export class ClassU1Component {
constructor (private router:Router){}

back(){
  this.router.navigateByUrl("/")
}
}

