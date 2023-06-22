import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { FirstSirviceService } from '../first-sirvice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive11',
  templateUrl: './reactive11.component.html',
  styleUrls: ['./reactive11.component.css']
})
export class Reactive11Component {
SignUpform! : FormGroup
s1 : any;

student = {
  name : 'sahil',
  mob : 8998867,
  city : 'a.nagar',
  age : 26,
}

constructor(private fb:FormBuilder,
            private sservice :FirstSirviceService,
            private router : Router){}

ngOnInit(){
  this.rform()
  this.sservice.stddata = this.student;
  
}
rform(){
  this.SignUpform = this.fb.group({
    username : ['',[Validators.required,Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(8) ]],
    password : [89999],
  })
}
submit(){
  console.log(this.SignUpform.value);
  this.sservice.Sservice = this.SignUpform.value.username
  
  this.router.navigateByUrl('/')
  
}

}
