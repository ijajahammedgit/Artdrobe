import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ShopboardComponent} from './shopboard/shopboard.component';

import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: ShopboardComponent },
  { path: 'home', component: ShopboardComponent },
  {path: 'login', component : UserLoginComponent},
  {path: 'register', component: UserRegistrationComponent},
  //{path: 'women', loadChildren: './dashboard/dashboard.module#DashboardModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
