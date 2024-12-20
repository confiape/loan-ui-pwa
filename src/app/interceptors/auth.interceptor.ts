import {inject} from '@angular/core';
import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

const excludedUrls: string[] = [
  '/api/IsAuthenticated',
  '/api/Authenticate/LoginWithGoogleToken',
  '/api/Authenticate/GetAuthorizationToken',
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (excludedUrls.some((url) => req.url.includes(url))) {
    return next(req);
  }

  return authService.getToken().pipe(
    switchMap((token) => {
      if (token) {
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next(clonedReq);
      }
      return next(req);
    }),
    catchError(() => next(req))
  );
};
