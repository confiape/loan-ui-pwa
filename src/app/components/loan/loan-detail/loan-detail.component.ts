import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {LoanDtoAndPayments, SimpleLoanDtoAndPayments} from '../../../core/services/openapi';
import {CurrencyPipe, DatePipe, NgClass, NgForOf, PercentPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LocalCurrencyPipe} from '../../../pipes/local-currency.pipe';

@Component({
  selector: 'app-loan-detail',
  imports: [
    CurrencyPipe,
    PercentPipe,
    DatePipe,
    NgClass,
    NgForOf,
    FormsModule,
    LocalCurrencyPipe
  ],
  templateUrl: './loan-detail.component.html'
})
export class LoanDetailComponent implements OnInit {
  paymentAmount = 0;
  isYape = false;
  loanDetails = inject<{ loan:LoanDtoAndPayments,name:string }>(MAT_DIALOG_DATA);


  ngOnInit(): void {
      }


  onSubmitPayment(): void {
  }
}
