import {AfterViewInit, Component} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthenticateService} from '../../core/services/openapi';
import {Router} from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit {

  constructor(private router: Router, private _authenticateService: AuthenticateService) {
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
    this._authenticateService.apiAuthenticateLoginWithGoogleTokenPost({
      accessToken: jwtToken
    }).subscribe({
      next: () => {
        this.router.navigate(['/home']).then();
      }
    })
  }
}
