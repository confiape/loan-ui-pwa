import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {authGuard} from './guards/auth.guard';
import {LoanComponent} from './pages/loan/loan.component';
import {loanResolver} from './pages/loan/loan.resolver';
import {tagsResolver} from './pages/loan/tags.resolver';

export const routes: Routes = [
  {
    path: 'loan',
    component: LoanComponent,
    canActivate: [authGuard],
    resolve: {
      data: loanResolver,
      tags: tagsResolver
    }
  },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];
