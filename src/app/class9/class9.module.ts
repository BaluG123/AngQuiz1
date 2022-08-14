import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Class9RoutingModule } from './class9-routing.module';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathsComponent } from './maths/maths.component';
import { Class9Component } from './class9/class9.component';


@NgModule({
  declarations: [
    ScienceComponent,
    SocialscienceComponent,
    MathsComponent,
    Class9Component
  ],
  imports: [
    CommonModule,
    Class9RoutingModule,
    FormsModule
  ]
})
export class Class9Module { }
