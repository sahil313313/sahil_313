import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicRoutingModule } from './classic-routing.module';
import { ClassU1Component } from './class-u1/class-u1.component';


@NgModule({
  declarations: [
    ClassU1Component
  ],
  imports: [
    CommonModule,
    ClassicRoutingModule
  ]
})
export class ClassicModule { }
