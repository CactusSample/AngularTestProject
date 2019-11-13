import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { ProductAddRemoveReducer } from 'src/store/reducer/product-add-remove-reducer';
import { CartDetailsComponent } from 'src/components/cart-details/cart-details.component';
import { ProductEffect } from 'src/store/effect/product.effect';
import { SortPipe } from '../pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    ProductListComponent,
    CartDetailsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      product: ProductAddRemoveReducer,
    }),
    EffectsModule.forRoot([ProductEffect])
  ],
  providers: [AuthService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
