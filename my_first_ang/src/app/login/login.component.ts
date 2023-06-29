import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../reactive/getdata.service';
import { FirstSirviceService } from '../first-sirvice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  "data" :[
    {
      name : 'sahil',
      age : 24;
      no : 9898989898;
    }
    ]
    "city" : "nagar";


  constructor(private router:Router,
              private getdd:GetdataService,
                ){}
  formTitle = '--LOGIN FORM--';
  test:string= 'click';
  getddd : any;

  submit() {
    this.test = 'testing property';
    this.formTitle = 'Login Form'
  }
  amount : number =5000;
  text:string ='sahil';
  

  title(): string{
    return "LOG IN"
  }
  backToHome(){
    this.router.navigateByUrl("")
  }
  NewProp(){
    this.text = 'sahil'
  }
subbmit(formData:any){
console.log(formData);



}
getdata(){
this.getddd = this.getdd.getData
console.log(this.getddd);

}


  //data binding 
//.1. one way    2. two way

// one way data binding types
//1.interpolation {{}}
//2. prperty binding []
//3. event binding()

// 1. interpolation{{}}
myName = 'sahil';











//2 . two way datat binding [()]
myname1 = 'sahil';
MyName = "sahil123";

ngOnInit(){
this.getdd.dataFromLog=this.data.values
}
 


}


