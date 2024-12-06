import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoanCardComponent} from './components/loan/loan-card/loan-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoanCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'confiape-loans-ui';
}
