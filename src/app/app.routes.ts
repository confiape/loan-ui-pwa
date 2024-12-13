import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {authGuard} from './guards/auth.guard';
import {LoanComponent} from './pages/loan/loan.component';
import {loanResolver} from './pages/loan/loan.resolver';
import {tagsResolver} from './pages/loan/tags.resolver';
import {FullComponent} from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loan',
    pathMatch: 'full', // Redirige la raíz a 'loan'
  },
  {
    path: '',
    canActivate: [authGuard],
    resolve: {
      data: loanResolver,
      tags: tagsResolver
    },
    component: FullComponent,
    children: [
      {
        path: 'loan',
        component: LoanComponent,
      },
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'loan', pathMatch: 'full'} // Redirige cualquier ruta desconocida a 'loan'

];
