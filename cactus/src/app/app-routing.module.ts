import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { CartDetailsComponent } from 'src/components/cart-details/cart-details.component';

const routes: Routes = [
  
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path: '', redirectTo:'dashboard',pathMatch: 'full',canActivate:[AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'cart', component: CartDetailsComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
