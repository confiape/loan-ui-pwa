import {Component, input, output} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {Loan, Client} from '../loan-card.component.models';


@Component({
  selector: 'app-loan-card',
  imports: [
    NgClass,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './loan-card.component.html'
})
export class LoanCardComponent {
  client = input.required<Client>();

  editedClient = output<Client>()
  viewedLoanDetails = output<Loan>()
  createdLoan = output()

  getStatusClass(): string {
    const statusClasses = {
      'active': 'bg-green-100 text-green-800',
      'overdue': 'bg-red-100 text-red-800',
      'paid': 'bg-gray-100 text-gray-800'
    };
    return statusClasses['paid'] || '';
  }


  createLoan(): void {
    this.createdLoan.emit()
  }

  editClient() {
    this.editedClient.emit(this.client())
  }

  viewLoanDetails(loan:Loan) {
    this.viewedLoanDetails.emit(loan);
  }
}

