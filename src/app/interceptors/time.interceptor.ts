import {HttpInterceptorFn} from '@angular/common/http';

export const timeInterceptor: HttpInterceptorFn = (req , next) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const clonedRequest = req.clone({setHeaders: {'X-Timezone': timezone}});
  return next(clonedRequest);
};
