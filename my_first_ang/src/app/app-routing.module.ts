import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LndingComponent } from './lnding/lnding.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login',  component : LoginComponent },
  {path :'lnding', component:LndingComponent},
  {path : 'signup', component :SignupComponent},
  {path : '',component :HomeComponent},
  {path : 'owner',loadChildren: () => import("./owner/owner.module").then(m1 =>m1.OwnerModule)},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
