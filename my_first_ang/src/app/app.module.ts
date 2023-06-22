import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LndingComponent } from './lnding/lnding.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DirectivesAngComponent } from './directives-ang/directives-ang.component';
import { Reactive11Component } from './reactive11/reactive11.component';
import { NewRformComponent } from './new-rform/new-rform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
 

 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LndingComponent,
    HomeComponent,
    StudentComponent,
    DirectivesAngComponent,
    Reactive11Component,
    NewRformComponent,
    ParentComponent,
    ChildComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
