import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFruitsRoutingModule } from './all-fruits-routing.module';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

@NgModule({
  imports: [
    CommonModule,
    AllFruitsRoutingModule
  ],
  declarations: [FruitsListComponent]
})
export class AllFruitsModule { }
