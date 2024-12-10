import {inject} from '@angular/core';
import {HttpInterceptorFn} from '@angular/common/http';

import {throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

const excludedUrls: string[] = [
  '/api/IsAuthenticated',
  '/api/Authenticate/LoginWithGoogleToken',
  '/api/Authenticate/GetAuthorizationToken',
];


export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (excludedUrls.some((url) => req.url.includes(url))) {
    return next(req);
  }
  return next(req).pipe(
    catchError((error) => {

      if (error.status === 401 || error.status === 403) {
        authService.cleanToken();

        return authService.checkAuth().pipe(
          switchMap((isAuthenticated) => {
            if (isAuthenticated) {
              return authService.getToken().pipe(
                switchMap((newToken) => {
                  if (newToken) {

                    const clonedReq = req.clone({
                      setHeaders: { Authorization: `Bearer ${newToken}` },
                    });

                    return next(clonedReq);
                  }
                  return throwError(() => error);
                })
              );
            } else {

              authService.logout();
              return throwError(() => error);
            }
          })
        );
      }

      return throwError(() => error);
    })
  );
};
