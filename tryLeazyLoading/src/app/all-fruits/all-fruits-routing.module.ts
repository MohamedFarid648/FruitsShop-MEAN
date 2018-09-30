import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

const routes: Routes = [

  {
    path: '',
    component: FruitsListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFruitsRoutingModule { }
