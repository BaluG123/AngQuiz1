import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathsComponent } from './maths/maths.component';
import { Class10Component } from './class10/class10.component';

const routes: Routes = [
  {
    path:'ScienceQuiz',
    component:ScienceComponent
  },
  {
    path:'SocialScienceQuiz',
    component:SocialscienceComponent
  },
  {
    path:'MathematicsQuiz',
    component:MathsComponent
  },
  {
    path:'',
    component:Class10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Class10RoutingModule { }
