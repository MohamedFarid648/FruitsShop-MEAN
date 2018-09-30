import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'allFruits',
    loadChildren: '../app/all-fruits/all-fruits.module#AllFruitsModule'
  },
  {
    path: 'addFruits',
    loadChildren: '../app/add-fruits/add-fruits.module#AddFruitsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
