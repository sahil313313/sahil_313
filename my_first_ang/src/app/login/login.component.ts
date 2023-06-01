import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formTitle = '--LOGIN FORM--';
  test:string= 'click';

  submit() {
    this.test = 'testing property';
    this.formTitle = 'Login Form'
  }
  amount : number =5000;
  text:string ='sahil' 

  title(){
    return "LOG IN"
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

}


