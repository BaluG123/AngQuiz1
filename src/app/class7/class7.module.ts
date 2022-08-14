import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Class7RoutingModule } from './class7-routing.module';
import { ScienceComponent } from './science/science.component';
import { MathsComponent } from './maths/maths.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { Class7Component } from './class7/class7.component';


@NgModule({
  declarations: [
    ScienceComponent,
    MathsComponent,
    SocialscienceComponent,
    Class7Component
  ],
  imports: [
    CommonModule,
    Class7RoutingModule,
    FormsModule
  ]
})
export class Class7Module { }
