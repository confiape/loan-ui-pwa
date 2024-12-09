import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {tap} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inyectamos el servicio de autenticación
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    tap(e => {
      if (e == false)
        router.navigate(['/login']);
    })
  );
};
