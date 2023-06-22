import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';

const routes: Routes = [
 
{path : 'studentLogin', component : StudentLoginComponent},
{path :'studentSignUp',component :StudentSignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
