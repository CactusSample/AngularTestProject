import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { LeftmenuComponent } from '../components/leftmenu/leftmenu.component';
import { BasicUserDetailsComponent } from '../components/basic-user-details/basic-user-details.component';
import { LoginComponent } from '../components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LeftmenuComponent,
    BasicUserDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
