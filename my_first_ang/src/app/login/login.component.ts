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

}
