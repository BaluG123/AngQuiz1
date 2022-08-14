import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Class10RoutingModule } from './class10-routing.module';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathsComponent } from './maths/maths.component';
import { Class10Component } from './class10/class10.component';


@NgModule({
  declarations: [
    ScienceComponent,
    SocialscienceComponent,
    MathsComponent,
    Class10Component
  ],
  imports: [
    CommonModule,
    Class10RoutingModule,
    FormsModule
  ]
})
export class Class10Module { }
