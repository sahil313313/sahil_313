import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lnding',
  templateUrl: './lnding.component.html',
  styleUrls: ['./lnding.component.css']
})
export class LndingComponent {

// constructor(private router :Router){}

// back(){
//   this.router.navigateByUrl("/")
signUpForm! :FormGroup
//name:string = 'poonam';
//name!:string;
student = {
 name: 'poonam',
 age:30
}
constructor(private fb: FormBuilder){}

 ngOnInit(){
    this.formDef();
 }

  formDef(){
     this.signUpForm = this.fb.group({
       fullName : ['sahil',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10)]],
       mobNo:['9999999',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
       email:[],
       userName:[],
       city:[],
       address:[]
     })

   }

   submit(){
    console.log(this.signUpForm.value);
    
   }


// }

}
