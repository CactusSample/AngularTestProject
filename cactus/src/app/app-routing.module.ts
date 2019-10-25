import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard/:id', component: DashboardComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
