import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassU1Component } from './class-u1/class-u1.component';

const routes: Routes = [
  { path :"class-u1" , component :ClassU1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassicRoutingModule { }
