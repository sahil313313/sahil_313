import { Component } from '@angular/core';
import { FirstSirviceService } from 'src/app/first-sirvice.service';
import { StudserviceService } from '../studservice.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  constructor(private fservice : FirstSirviceService,
    private stdservice:StudserviceService
    ){}
  multip(){
    let x =this.fservice.multiply(20,20)
    console.log(x);
    
  }

}
