import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Class8RoutingModule } from './class8-routing.module';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathsComponent } from './maths/maths.component';
import { Class8Component } from './class8/class8.component';


@NgModule({
  declarations: [
    ScienceComponent,
    SocialscienceComponent,
    MathsComponent,
    Class8Component
  ],
  imports: [
    CommonModule,
    Class8RoutingModule,
    FormsModule
  ]
})
export class Class8Module { }
