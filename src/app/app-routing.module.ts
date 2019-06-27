import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
   { path: 'Signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
