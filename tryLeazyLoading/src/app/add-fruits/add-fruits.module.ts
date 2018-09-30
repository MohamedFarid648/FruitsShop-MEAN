import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFruitsRoutingModule } from './add-fruits-routing.module';
import { AddFruitsFormComponent } from './add-fruits-form/add-fruits-form.component';

@NgModule({
  imports: [
    CommonModule,
    AddFruitsRoutingModule
  ],
  declarations: [AddFruitsFormComponent]
})
export class AddFruitsModule { }
