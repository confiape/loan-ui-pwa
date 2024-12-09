import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthenticateService} from '../../core/services/openapi';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private httpClient: HttpClient, private _authenticateService: AuthenticateService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initializeGoogleSignIn();
  }

  private initializeGoogleSignIn(): void {

    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: this.handleCredentialResponse.bind(this)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button')!,
      {
        theme: 'outline',
        size: 'large',
        width: '250',
      }
    );

    google.accounts.id.prompt();
  }

  private handleCredentialResponse(response: any): void {
    const jwtToken = response.credential;
    console.log('JWT Token:', jwtToken);

    const base64Url = jwtToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const userData = JSON.parse(jsonPayload);
    this._authenticateService.apiAuthenticateLoginWithGoogleTokenPost({
      accessToken: jwtToken
    }).subscribe()
    console.log('User Data:', userData);
  }
}
