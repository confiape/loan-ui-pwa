import {Component, EventEmitter, input, Output} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass, NgIf} from '@angular/common';

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
  user = input<User>({
    id: 1,
    name: "warren",
    loans: [
      {
        id: 1,

        amount: 10000,
        interestRate: 5.5,
        duration: 12,
        monthlyPayment: 856.75,
        status: 'active',
        progressPercentage: 65,
        date: new Date(),
      }
    ]
  });

  @Output() paymentClick = new EventEmitter<number>();
  @Output() viewDetailsClick = new EventEmitter<number>();

  getStatusClass(): string {
    const statusClasses = {
      'active': 'bg-green-100 text-green-800',
      'overdue': 'bg-red-100 text-red-800',
      'paid': 'bg-gray-100 text-gray-800'
    };
    return statusClasses['paid'] || '';
  }

  makePayment(loan: Loan): void {
    this.paymentClick.emit(loan.id);
  }

  viewDetails(loan: Loan): void {
    this.viewDetailsClick.emit(loan.id);
  }
  createNewLoan(): void {
    console.log({open:"CreateNewLoan"})
  }

  editUser() {

  }

  openLoanDetail() {
    console.log({open:"OpenLoanDetail"})
  }

  protected readonly open = open;
}

export interface User {
  id: number,
  name: string,
  loans: Loan[]
}

export interface Loan {
  id: number;
  amount: number;
  interestRate: number;
  duration: number;
  monthlyPayment: number;
  status: 'active' | 'overdue' | 'paid';
  progressPercentage: number;
  date: Date;
}
