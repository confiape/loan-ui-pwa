import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, of, switchMap} from 'rxjs';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Inyectamos el servicio de autenticación


  const token = authService.getAuthorizationToken();


  if (!token && authService.isAuthenticated()) {
    // Si no tenemos el token pero la cookie de autenticación está presente
    return authService.getAuthorizationTokenFromBackend().pipe(
      switchMap(newToken => {
        // Si conseguimos el nuevo token, clonamos la solicitud y añadimos el Authorization header
        const clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${newToken}`
          }
        });
        return next(clonedRequest); // Continuamos con la solicitud
      }),
      catchError((error) => {
        // Si la solicitud para obtener el token falla (por ejemplo, 401 Unauthorized)
        if (error.status === 401) {
          // Si no hay cookie o el backend devuelve 401, se podría redirigir al login
          authService.logout(); // Método que puede limpiar la sesión y redirigir al login
        }
        // Propagamos el error para que la respuesta sea tratada
        return of(error);
      })
    );
  }

  // Si ya tenemos un token válido en el almacenamiento, añadimos el Authorization header
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest); // Continuamos con la solicitud
  }

  // Si no tenemos token ni cookie, simplemente enviamos la solicitud sin ningún header de autorización
  return next(req);
};
