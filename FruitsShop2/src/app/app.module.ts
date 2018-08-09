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
import { EditFruitComponent } from './edit-fruit/edit-fruit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AllFruitsComponent } from './all-fruits/all-fruits.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavBarComponentComponent,
    FruitsComponent,
    ClientsComponent,
    ClientInfoComponent,
    AddProductComponent,
    MyDirectiveDirective,
    EditFruitComponent,
    ErrorPageComponent,
    AllFruitsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,HttpClientModule,
    RouterModule.forRoot([
    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:'ClientInfo',component:ClientInfoComponent},
    {path:'Fruits',component:AllFruitsComponent},
    {path:'EditFruit/:id',component:EditFruitComponent},
    {path:'Clients',component:ClientsComponent},
    {path:'AddProduct',component:AddProductComponent},
    {path:'',redirectTo:"/Fruits",pathMatch:"full"},
    {path:'**',component:ErrorPageComponent},//this should be last one because it matches every path


    
    // {path:'**',component:AppComponent}
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
