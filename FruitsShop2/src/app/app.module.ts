import { JwtInterceptor } from './JWT/jwt_interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ErrorInterceptor } from './JWT/error.interceptor';


const appRoutes: Routes = [
  {path: '', redirectTo: '/Fruits', pathMatch: 'full' , canActivate: [AuthGuard]},
  {path: 'Login', component: LoginComponent},
  {path: 'Logout', component: LogoutComponent},

  {path: 'Register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'ClientInfo', component: ClientInfoComponent , canActivate: [AuthGuard]},
  {path: 'Fruits',component: AllFruitsComponent , canActivate: [AuthGuard]},
  {path: 'EditFruit/:id', component: EditFruitComponent , canActivate: [AuthGuard]},
  {path: 'Clients', component: ClientsComponent , canActivate: [AuthGuard]},
  {path: 'AddProduct', component: AddProductComponent , canActivate: [AuthGuard]},
  {path: '**', component: ErrorPageComponent , canActivate: [AuthGuard]}, // this should be last one because it matches every path


  
  // {path:'**',component:AppComponent}
  
  ];
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
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
