import { Routes } from '@angular/router';
import {TestComponent} from './pages/test/test.component';
import {LoginComponent} from './pages/login/login.component';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
  { path: 'home', component: TestComponent ,canActivate:[authGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];
