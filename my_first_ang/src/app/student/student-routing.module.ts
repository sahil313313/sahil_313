import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';

const routes: Routes = [{ path: '', component: StudentComponent },
{path : 'studentLogin', component : StudentLoginComponent},
{path :'studentsignUp',component :StudentSignUpComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
