import {ApplicationConfig, LOCALE_ID, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './interceptors/auth.interceptor';
import {BASE_PATH} from './core/services/openapi';
import {authErrorInterceptor} from './interceptors/auth-error.interceptor';
import {timeInterceptor} from './interceptors/time.interceptor';
import {provideTablerIcons, TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {IconAdOff, IconHeartFilled, IconNumber123} from 'angular-tabler-icons/icons';

registerLocaleData(localeEs, 'es');


export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, authErrorInterceptor,timeInterceptor])),
    provideTablerIcons(TablerIcons),
    {provide: BASE_PATH, useValue: ''},
    provideAnimationsAsync(),
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    provideAnimationsAsync(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic'
      }
    }
  ]
};
