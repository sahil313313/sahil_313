import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LndingComponent } from './lnding/lnding.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DirectivesAngComponent } from './directives-ang/directives-ang.component';
import { Reactive11Component } from './reactive11/reactive11.component';
import { NewRformComponent } from './new-rform/new-rform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
 

const routes: Routes = [
  { path: 'login',  component : LoginComponent },
  {path:'directives', component:DirectivesAngComponent},
 
  {path :'lnding', component:LndingComponent},
  {path : 'signup', component :SignupComponent},
  {path : '',component :HomeComponent},
  { path :'reactive11' , component : Reactive11Component},
  { path: 'student', component: StudentComponent},
  {path: 'Rform', component:NewRformComponent},
  {path : 'parent',component:ParentComponent},
  {path :'child',component :ChildComponent},
  {path : 'owner',loadChildren: () => import("./owner/owner.module").then(m1 =>m1.OwnerModule)},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  {path : 'classic',loadChildren : () => import("./classic/classic.module").then(m =>m.ClassicModule)},
  { path: 'reactive', loadChildren : () => import ('./reactive/reactive.module'). then (m => m.ReactiveModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
