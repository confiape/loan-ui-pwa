import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AuthenticateService} from '../core/services/openapi';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private token: string | null | undefined = null;

  constructor(private router: Router, private authenticateService: AuthenticateService) {
  }

  checkAuth(): Observable<boolean> {
    if (this.isAuthenticated$.value) {
      console.log("true gg")
      return of(true);
    }
    return this.authenticateService.apiAuthenticateIsAuthenticatedGet().pipe(
      tap((auth) => {
        console.log(auth+"ggg")
        return this.isAuthenticated$.next(auth)
      }),
      catchError(() => {
        this.isAuthenticated$.next(false);
        return of(false);
      })
    );
  }

  getToken(): Observable<string | null> {
    if (this.token) {
      console.log(this.token+"gg")
      return of(this.token);
    }
    return this.authenticateService.apiAuthenticateGetAuthorizationTokenPost().pipe(
      map((response) => response.accessToken || null),
      tap((token) => (this.token = token)),
      catchError(() => {
        this.token = null;
        return of(null);
      })
    );
  }

  cleanToken(): void {
    this.token = null;
    this.isAuthenticated$.next(false)
  }

  logout(): void {
    this.authenticateService.apiAuthenticateLogOutGet()
      .pipe(
        tap(() => {
          this.cleanToken()
          this.router.navigate(['/login']).then();
        }),
      )
      .subscribe()

  }
}

export interface LoginResponse {
  user: PersonDto;
  accessToken: string;
  tokenType: string;
}

export interface PersonDto {
  id: string;
  avatar?: string;
  background?: string;
  name: string;
  dni?: string;
  dniPath?: string;
  email?: string;
  phoneNumber?: string;
  title?: string;
  company?: string;
  birthday?: Date;
  address?: string;
  notes?: string;
  status: string;
}
