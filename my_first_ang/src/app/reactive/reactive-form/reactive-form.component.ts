import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';
 
Validators
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
 
// SignupForm! : FormGroup 

// constructor(private fb:FormBuilder){}
// ngOnInit(){
//   this.scontrol();

// }

// scontrol(){
//   this.SignupForm = this.fb.group({
//     name :['',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]],
//     adress : [],
//     email : [],
//     contact : [],
//   })
// }

signUpForm! :FormGroup
//name:string = 'poonam';
//name!:string;
student = {
 name: 'poonam',
 age:30
}
constructor(private fb: FormBuilder,
              private getd :GetdataService,
              private router:Router){}

 ngOnInit(){
    this.formDef();
    this.getd.getData = this.signUpForm.value.fullName
    
 }

  formDef(){
     this.signUpForm = this.fb.group({
       fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10)]],
       mobNo:['99999888',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
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





