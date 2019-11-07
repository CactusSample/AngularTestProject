import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoginComponent } from '../components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { ProductsComponent } from '../components/products/products.component';
import { ProductListComponent } from '../components/product-list/product-list.component'
import { ProductAddRemoveReducer } from 'src/store/reducer/product-add-remove-reducer';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      product: ProductAddRemoveReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
