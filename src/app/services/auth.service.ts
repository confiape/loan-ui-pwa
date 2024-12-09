import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticateService} from '../core/services/openapi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '';

  constructor(private http: HttpClient, private router: Router,private authenticateService: AuthenticateService) {}

  // Verificar si la cookie AuthenticationToken está presente
  isAuthenticated(): Observable<boolean> {
    return this.authenticateService.apiAuthenticateIsAuthenticatedGet();
  }
  signInWithGoogle(token: string): Observable<any> {
    return this.authenticateService.apiAuthenticateGoogleSignInPost({ token });
  }

}
