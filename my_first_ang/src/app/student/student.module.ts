import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentLoginComponent,
    StudentSignUpComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
