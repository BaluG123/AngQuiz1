import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'class6',loadChildren:()=>import('./class6/class6.module').then(mod=>mod.Class6Module)},
  {path:'class7',loadChildren:()=>import('./class7/class7.module').then(mod=>mod.Class7Module)},
  {path:'class8',loadChildren:()=>import('./class8/class8.module').then(mod=>mod.Class8Module)},
  {path:'class9',loadChildren:()=>import('./class9/class9.module').then(mod=>mod.Class9Module)},
  {path:'class10',loadChildren:()=>import('./class10/class10.module').then(mod=>mod.Class10Module)},
  {path:'',loadChildren:()=>import('./current/current.module').then(mod=>mod.CurrentModule)},
  {path:'generalknowledge',loadChildren:()=>import('./general/general.module').then(mod=>mod.GeneralModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
