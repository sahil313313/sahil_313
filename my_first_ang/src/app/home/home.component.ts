import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstSirviceService } from '../first-sirvice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   Uname : any;
   std :any;
  constructor(private router : Router,
    private sservice :FirstSirviceService){}

    ngOnInit(){
      this.Uname = this.sservice.Sservice
      this.std= this.sservice.stddata
    }
landing2(){
  this.router.navigateByUrl('/lnding')
}
StudLog(){
  this.router.navigateByUrl("/student/studentLogin")
}
classu1(){
  this.router.navigateByUrl("/classic/class-u1")
}
directives(){
  this.router.navigateByUrl("/directives")
}
sign_up(){
  this.router.navigateByUrl('/signup')
}
reactive(){
   this.router.navigateByUrl("/reactive/reactiveform")
}
reactive_11(){
  this.router.navigateByUrl("/reactive11")
}
 Rform(){
  this.router.navigateByUrl('/Rform')
 }
 parent(){
  this.router.navigateByUrl('/parent')
 }
 
}
