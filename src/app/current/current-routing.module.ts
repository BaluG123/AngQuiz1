import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentaffairsComponent } from './currentaffairs/currentaffairs.component';

const routes: Routes = [
  {
    path:'currentaffairsQuiz',
    component:CurrentaffairsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRoutingModule { }
