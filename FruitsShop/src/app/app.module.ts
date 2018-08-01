import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';

import { FruitsComponent } from './fruits/fruits.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MyDirectiveDirective } from './Directives/my-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavBarComponentComponent,
    FruitsComponent,
    ClientsComponent,
    ClientInfoComponent,
    AddProductComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
    {path:'',component:FruitsComponent},
    {path:'ClientInfo',component:ClientInfoComponent},
    {path:'Fruits',component:FruitsComponent},
    {path:'Clients',component:ClientsComponent},
    {path:'AddProduct',component:AddProductComponent}
    
    // {path:'**',component:AppComponent}
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
