import { AddFruitsFormComponent } from './add-fruits-form/add-fruits-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{
  path: '' ,
  component : AddFruitsFormComponent

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFruitsRoutingModule { }
