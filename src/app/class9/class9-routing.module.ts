import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathsComponent } from './maths/maths.component';
import { Class9Component } from './class9/class9.component';
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
    component:Class9Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Class9RoutingModule { }
