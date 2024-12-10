import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {

      if (error.status === 401 || error.status === 403) {
        // Limpia el token actual
        authService.cleanToken();

        // Intenta renovar la autenticación
        return authService.checkAuth().pipe(
          switchMap((isAuthenticated) => {
            if (isAuthenticated) {
              // Si está autenticado nuevamente, intenta obtener un nuevo token
              return authService.getToken().pipe(
                switchMap((newToken) => {
                  if (newToken) {
                    // Clona la solicitud original con el nuevo token
                    const clonedReq = req.clone({
                      setHeaders: { Authorization: `Bearer ${newToken}` },
                    });
                    // Reintenta la consulta original
                    return next(clonedReq);
                  }
                  return throwError(() => error); // Si no hay token, lanza el error
                })
              );
            } else {
              // Si no está autenticado, redirige al login
              authService.logout(); // Asegura que el estado se limpie
              return throwError(() => error);
            }
          })
        );
      }
      // Si no es un error 401 o 403, lanza el error original
      return throwError(() => error);
    })
  );
};
