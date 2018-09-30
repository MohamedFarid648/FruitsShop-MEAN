import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import { NavBarComponentComponent } from './Components/nav-bar-component/nav-bar-component.component';
import { MyColorDirective } from './Directives/my-color.directive';

@NgModule({
  declarations: [
    AppComponent , FooterComponentComponent, NavBarComponentComponent, MyColorDirective,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
